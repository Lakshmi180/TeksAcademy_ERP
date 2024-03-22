import React from 'react';
import ReactEcharts from "echarts-for-react";
// import { BsFillSpeedometerFill, BsSlashCircleFill, BsCircleFill, BsExclamationCircleFill } from 'react-icons/bs';
const getChartColorsArray = (colors) => {
    if (!colors) return [];

    colors = JSON.parse(colors);
    return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);

            if (color.indexOf("#") !== -1)
                color = color.replace(" ", "");
            if (color) return color;
            else return newValue;
        } else {
            var val = value.split(',');
            if (val.length === 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
};

const GaugeChart = ({ dataColors }) => {
    var chartGaugeColors = getChartColorsArray(dataColors);
    var option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        color: chartGaugeColors,
        textStyle: {
            fontFamily: 'Poppins, sans-serif',
        },
        series: [{
            name: 'Pressure',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}',
                color: '#858d98',
            },
            axisLabel: {
                color: '#858d98',
            },
            data: [{
                title: {
                    color: '#858d98',
                },
                value: 50,
                name: 'SCORE',
            }]
        }]
    };
    return (
        <React.Fragment>
            <ReactEcharts style={{ width: "400px", height: "400px" , border:"1px solid #ccc"}} option={option} />
        </React.Fragment>
    )
}

export default GaugeChart;
