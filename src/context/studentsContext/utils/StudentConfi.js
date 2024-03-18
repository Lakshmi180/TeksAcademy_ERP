export const InitialState ={
    
    TotalStudents:[],
    
    EnrolledStudents:{
        PaginatedStudents:[],
        filters:{
            enquiryTakenBy:"",
            fromDate:"",
            toDate:"",
            modeOfTraining:"",
            branch:"", 
        },
        searchResultStudents:null,
        perPage:10,
        totalStudents:null,
        totalPages:null,
        loading:false,
        startStudent:null,
        endStudent:null,
        search:"",
        currentPage:1,
        // branch:"",
        // fromDate:"",
        // toDate:"",
        // enquiryTakenby:"",
        // modeOfTraining:"",
        // loading:false,
    },

    CertificateStudents:{
        PaginatedCertificateStudents:[],
        filters:{
            fromDate:"",
            toDate:"",
            branch:"",
            course:"",
            enquiryTakenby:"",
            certificateStatus:""            
        },
        currentPage:1,
        perPage:10,
        filteredSearchstudents:null,
        totalStudents:null,
        totalPages:null,
        loading:false,
        startStudent:null,
        endStudent:null,
        search:"",
    },

    FeeDetailsStudents:{
        PaginatedFeeDetailsStudents:[],
        filters:{
            fromDate:"",
            toDate:"",
            branch:"",
            modeOfTraining:"",   
                   
        },
        currentPage:1,
        perPage:10,
        totalStudents:null,
        totalPages:null,
        filteredSearchstudents:null,
        loading:false,
        startStudent:null,
        endStudent:null,
        search:"",
    },

    DashboardStudents:{
        PaginatedDashboardStudents:[],
        filters:{
            fromDate:"",
            toDate:"",
            branch:"",
            modeOfTraining:"",            
        },
        currentPage:1,
        perPage:10,
        filteredSearchstudents:null,
        totalStudents:null,
        totalPages:null,
        loading:false,
        startStudent:null,
        endStudent:null,
        search:"",

    }

}