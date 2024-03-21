import React, { createContext, useEffect } from 'react'
import { useReducer } from 'react';
import { InitialState } from './utils/StudentConfi';
import StudentsReducer from './StudentsReducer';
import * as api from "./utils/StudentsAPIs";
import * as Actions from "./utils/StudentsActions"

export const StudentsContext = createContext();

const StudentsContextProvider = ({ children }) => {

  const [studentState, Dispatchstudents] = useReducer(StudentsReducer, InitialState)

  console.log(studentState, "secondredf")

  const { perPage, search, filters, currentPage } = studentState.EnrolledStudents;
  console.log(currentPage, perPage, search, filters, "ggggggg")


  const getAllStudents = async () => {
    const { status, data } = await api.getAllStudents();
    console.log("Totalstudentsdatayy", data, status)
    if (status === 201) {
      Dispatchstudents(Actions.setStudentsData(data, "ALL_STUDENTS"))
    }
  }



  const getPaginatedStudentsData = async () => {
    const { filters, perPage, search, currentPage, } = studentState.EnrolledStudents;
    console.log(perPage, search, filters, currentPage, "hhhhhhhh")
    console.log(filters, "kbjbjvbdbf")


    Dispatchstudents(Actions.setLoading("ENROLLED_STUDENTS"))
    try {
      const { data, status } = await api.getEnrolledStudents(currentPage, perPage, search, filters);
      console.log(data, status, "paginateddata")
      if (status == 200) {
        Dispatchstudents(Actions.getEnrolledStudents(data, "ENROLLED_STUDENTS"))
      }
    }
    catch (error) {
      console.error(error)
    }
    finally {
      Dispatchstudents(Actions.setLoading("ENROLLED_STUDENTS"))
    }
  }

  const getPaginatedCertificateData = async () => {
    const { currentPage, perPage, search, filters } = studentState.CertificateStudents;
    console.log(currentPage, perPage, search, filters, "herethefilters")
    Dispatchstudents(Actions.setLoading("CERTIFICATE_STUDENTS"))
    try {
      const { data, status } = await api.getCertificateStudents(currentPage, perPage, search, filters);
      if (status === 200) {
        Dispatchstudents(Actions.getCertificateStudents(data, "CERTIFICATE_STUDENTS"))
      }
    }
    catch (error) {
      console.log(error);
    }
    finally {
      Dispatchstudents(Actions.setLoading("CERTIFICATE_STUDENTS"))
    }
  }

  const getPaginated_Requested_CertificateStudents = async () => {
    const { currentPage, perPage, search, filters } = studentState.Requested_CertificateStudents;
    Dispatchstudents(Actions.setLoading("REQUESTED_CERTIFICATE_STUDENTS"))

    try {
      const { data, status } = await api.getRequested_CertificateStudents(currentPage, perPage, search, filters);

      if (status === 200) {
        Dispatchstudents(Actions.getRequested_CertificateStudents(data, "REQUESTED_CERTIFICATE_STUDENTS"))
      }
    }
    catch (error) {
      console.log(error);

    }
    finally {
      Dispatchstudents(Actions.setLoading("REQUESTED_CERTIFICATE_STUDENTS"))

    }
  }

  const getPaginatedFeeDetailsStudents = async () => {
    const { currentPage, perPage, search, filters } = studentState.FeeDetailsStudents;
    Dispatchstudents(Actions.setLoading("FEE_DETAILS_STUDENTS"))
    try {
      const { data, status } = await api.getFeeDetailsStudents(currentPage, perPage, search, filters);
      if (status === 200) {
        Dispatchstudents(Actions.getFeeDetailsStudents(data, "FEE_DETAILS_STUDENTS"))
      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
      Dispatchstudents(Actions.setLoading("FEE_DETAILS_STUDENTS"))
    }
  }

  const getPaginatedDashboardStudents = async () => {
    const { currentPage, perPage, search, filters } = studentState.DashboardStudents;
    Dispatchstudents(Actions.setLoading("DASHBOARD_STUDENTS"))
    try {
      const { data, status } = await api.getDashboardStudents(currentPage, perPage, search, filters);
      if (status === 200) {
        Dispatchstudents(Actions.getDashboardStudents(data, "DASHBOARD_STUDENTS"))

      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
      Dispatchstudents(Actions.setLoading("DASHBOARD_STUDENTS"))
    }
  }





  const createStudentRecord = async (studentdata) => {
    console.log("Create------------------- studentdata ", studentdata);
    try {
      const { data, status } = await api.createStudentRecord(studentdata)


      if (status === "200") {
        Dispatchstudents(Actions.createStudentRecord(data, "CREATE_STUDENT"))


      }
      return { data, status };

    }
    catch (error) {
      console.error(error)
    }
  }


  const getStudent = async (studentId) => {
    try {
      const { status, data } = await api.getStudentById(studentId)
      if (status == 200) {
        return data;
      }
    }
    catch (error) {
      console.error(error);
    }
  }


  const UpdateStudent = async (student) => {
    try {
      const { status, data } = await api.UpdateStudentdata(student);
      if (status == 200) {
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getPaginatedStudentsData();
    getPaginatedCertificateData();
    getPaginated_Requested_CertificateStudents();
    getAllStudents();

  }, []);

  useEffect(() => {
    getPaginated_Requested_CertificateStudents();
  }, [
    studentState?.Requested_CertificateStudents?.search,
    studentState?.Requested_CertificateStudents?.currentPage,
    studentState?.Requested_CertificateStudents?.perPage,
    studentState?.Requested_CertificateStudents?.filters,])


  useEffect(() => {
    getPaginatedCertificateData();
  }, [studentState?.CertificateStudents?.search,
  studentState?.CertificateStudents?.currentPage,
  studentState?.CertificateStudents?.perPage,
  studentState?.CertificateStudents?.filters
  ])



  useEffect(() => {
    getPaginatedStudentsData();
  }, [studentState?.EnrolledStudents?.search,
  studentState?.EnrolledStudents?.currentPage,
  studentState?.EnrolledStudents?.perPage,
  studentState?.EnrolledStudents?.filters.fromDate,
  studentState?.EnrolledStudents?.filters.toDate,
  studentState?.EnrolledStudents?.filters.enquiryTakenby,
  studentState?.EnrolledStudents?.filters.modeOfTraining,
  studentState?.EnrolledStudents?.filters.branch,
  ]);

  return (
    <StudentsContext.Provider value={{
      studentState,
      Dispatchstudents,
      getPaginatedStudentsData,
      createStudentRecord,
      getAllStudents,
      getStudent,
      UpdateStudent,
      getPaginatedCertificateData,
      getPaginated_Requested_CertificateStudents
    }}>
      {children}
    </StudentsContext.Provider>
  )
}


export default StudentsContextProvider;


