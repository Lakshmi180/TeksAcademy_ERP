import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StudentDetails } from "./StudentDetails";
import { useTheme } from "../../../../context/themeContext/ThemeContext";
import { EducationDetails } from "./EducationDetails";
import { AdmissionDetails } from "./AdmissionDetails";
import { FeeDetails } from "./FeeDetails";
import { OthersForm } from "./OthersForm";
import { Billing } from "./Billing";
import { ParentsDetails } from "./ParentsDetails";
import { IoMdArrowBack, IoMdCheckmark, IoMdArrowForward } from "react-icons/io";
import { Preview } from "./Preview";
import "./RegistrationForm.css";
import { useBranchContext } from "../../../../hooks/useBranchContext";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useLeadSourceContext } from "../../../../hooks/useLeadSourceContext";
import { useCourseContext } from "../../../../hooks/useCourseContext";
import { useCoursePackage } from "../../../../hooks/useCoursePackage";
import { useStudentsContext } from "../../../../hooks/useStudentsContext";
import { TbDatabaseDollar } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

function RegistrationForm() {
  // * Active Tab start
  const [activeTab, setActiveTab] = useState(1);

  const { theme } = useTheme();
  const { dispatch } = useStudentsContext();
  const [isPopupOpen, setPopupOpen] = useState(false);
  let select = "select";
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  // const { user } = useAuthContext();
  const { BranchState } = useBranchContext();
  const { leadSourceState } = useLeadSourceContext();
  const { courseState, getAllCourses } = useCourseContext();
  const { coursePackageState } = useCoursePackage();
  const navigate = useNavigate();
  console.log(`COurse State : ${courseState}`);

  // registraion form data
  const [user_id, setuserid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [parentsname, setParentsName] = useState("");
  const [parentsnumber, SetParentsNumber] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [college, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [area, setArea] = useState("");
  const [native, setNative] = useState("");
  const [zipcode, setZipcode] = useState(null);
  const [whatsappno, setWhatsAppNo] = useState(null);
  const [educationtype, setEducationType] = useState("");
  const [marks, setMarks] = useState("");
  const [academicyear, setAcademicyear] = useState("");
  // const [studentImage, setSelectedFile] = useState(null);
  // const [profilepic, setProfilePpic] = useState("");
  const [enquirydate, setEnquiryDate] = useState("");
  const [enquirytakenby, setEnquiryTakenBy] = useState("Bala Krishna");
  const [coursepackage, setCoursepakage] = useState("");
  const [courses, setCourses] = useState("");
  const [leadsource, setLeadSource] = useState("");
  const [branch, setBranch] = useState("");
  const [modeoftraining, setModeOfTraining] = useState("");
  // const [admissionstatus, setAdmissionStatus] = useState("");
  const [registrationnumber, setRegistrationNumber] = useState("");
  const [admissiondate, setAdmissionDate] = useState("");
  const [validitystartdate, setValidityStartDate] = useState("");
  const [validityenddate, setValidityEndDate] = useState("");

  const [feetype, setfeetype] = useState("");
  const [amount, setAmount] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [taxamount, setTaxamount] = useState(null);
  const [totalamount, setTotalamount] = useState(null);

  const [feedetails, setFeeDetails] = useState([]);
  const [grosstotal, setGrosstotal] = useState(null);
  const [totaldiscount, setTotalDiscount] = useState(0);
  const [totaltax, settotaltax] = useState(null);
  const [grandtotal, setGrandtotal] = useState(null);
  const [finaltotal, setfinaltotal] = useState(null);
  const [admissionremarks, setadmissionremarks] = useState("");
  const [assets, setassets] = useState([]);
  const [initialpayment, setinitialamount] = useState([]);
  const [dueamount, setdueamount] = useState(null);
  const [totalinstallments, settotalinstallments] = useState(0);
  const [duedatetype, setduedatetype] = useState("");
  const [addfee, setaddfee] = useState(false);
  const [installments, setinstallments] = useState([]);
  const [leadsourceOptions, setleadsourceOptions] = useState(false);
  const [CustomLeadSource, setCustomLeadSource] = useState("");
  const [feedetailsbilling, setfeedetailsbilling] = useState([]);
  const [materialfee, setmaterialfee] = useState(null);

  const [totalfeewithouttax, settotalfeewithouttax] = useState(null);
  const [totalpaidamount, settotalpaidamount] = useState(0);
  const [educationOthersOption, setEducationOthersOption] = useState(false);
  const [customEducationType, setCustomEducationType] = useState("");
  const [student_status, setStudent_status] = useState([]);
  const [certificate_status, setcertificate_status] = useState([
    { courseStartDate: "", courseEndDate: "", certificateStatus: "" },
  ]);
  const [error, setError] = useState({
    name: "",
    email: "",
    photo: "",
    dob: "",
    contact: "",
    wpNum: "",
    gender: "",
    marital: "",
    college: "",
    pincode: "",
    country: "",
    state: "",
    native: "",
    area: "",
  });

  const [errorState, setErrorState] = useState({});
  const [errorBox, setErrorBox] = useState(false);
  const [extra_discount, setExtra_Discount] = useState([]);
  let LoggedInuser = JSON.parse(localStorage.getItem("user"));
  let userName;
  // if (LoggedInuser) {
  //   userName = LoggedInuser.fullname;
  //   setEnquiryTakenBy(userName);
  // }

  const [imageUrl, setImageUrl] = useState(null);
  const displayImage = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target.result; // Get the base64 image data
      setImageUrl(imageUrl);
    };

    reader.readAsDataURL(file);
  };
  useEffect(() => {
    if (LoggedInuser) {
      userName = LoggedInuser.fullname;
      setEnquiryTakenBy(userName);
      console.log("userName", userName);
    }
  }, [LoggedInuser]);
  const handleAssetChange = (event) => {
    const assetName = event.target.name;
    if (event.target.checked) {
      // Add the selected asset to the array
      setassets([...assets, assetName]);
    } else {
      // Remove the asset from the array if it's unchecked
      setassets(assets.filter((asset) => asset !== assetName));
    }
  };
  const handleEducationSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "others") {
      setEducationOthersOption(true);
      setCustomEducationType("");
      setEducationType(selectedValue);
    } else {
      setEducationOthersOption(false);
      setEducationType(selectedValue);
    }
  };
  const handleLeadSourceSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (
      selectedValue.toLowerCase().split(" ").filter(Boolean).join(" ") ===
        "student referral" ||
      selectedValue.toLowerCase().split(" ").filter(Boolean).join(" ") ===
        "employee referral"
    ) {
      setleadsourceOptions(true);
      setCustomLeadSource({ source: selectedValue });
      setLeadSource([{ source: selectedValue }]);
    } else {
      setleadsourceOptions(false);
      setCustomLeadSource({ source: selectedValue });

      setLeadSource([{ source: selectedValue }]);
    }
  };
  const handleFeecalculations = () => {
    // console.log("feedeatisl", feedetails)
    function validateFeedetails(feedetails) {
      const admissionFeeExists = feedetails.some(
        (item) => item.feetype === "Admission Fee"
      );
      const feeExists = feedetails.some((item) => item.feetype === "fee");

      if (!admissionFeeExists || !feeExists) {
        // Validation failed

        return false;
      }

      // Validation passed
      return true;
    }

    if (validateFeedetails(feedetails)) {
      let grosstotall = 0;
      let totaldiscountt = 0;
      let totalfeewithouttaxx = 0;
      let totaltaxx = 0;
      let grandtotall = 0;
      let materialfeee = 0;
      const array = [];
      for (let i = 0; i < feedetails.length; i++) {
        if (feedetails[i].feetype === "Admission Fee") {
          let admissionobject = {
            id: "",
            feetype: "",
            feewithtax: 0,
            feewithouttax: 0,
            feetax: 0,
          };
          admissionobject.id = feedetails[i].id;
          admissionobject.feetype = "Admission Fee";
          admissionobject.feewithtax = feedetails[i].totalamount;
          admissionobject.feewithouttax = admissionobject.feewithtax / 1.18;
          admissionobject.feetax =
            admissionobject.feewithtax - admissionobject.feewithouttax;
          grosstotall = grosstotall + parseInt(feedetails[i].amount);
          // totaldiscountt = totaldiscountt + parseInt(feedetails[i].discount);
          totaldiscountt = 0;
          totalfeewithouttaxx =
            totalfeewithouttaxx + admissionobject.feewithouttax;
          totaltaxx = totaltaxx + admissionobject.feetax;
          grandtotall = grandtotall + admissionobject.feewithtax;

          array.push(admissionobject);
        }
        if (feedetails[i].feetype === "fee") {
          let coursefeeobject = {
            id: "",
            feetype: "",
            feewithtax: 0,
            feewithouttax: 0,
            feetax: 0,
          };
          coursefeeobject.id = feedetails[i].id;
          coursefeeobject.feetype = "Course Fee";
          coursefeeobject.feewithtax = feedetails[i].totalamount * 0.65;
          coursefeeobject.feewithouttax = coursefeeobject.feewithtax / 1.18;
          coursefeeobject.feetax =
            coursefeeobject.feewithtax - coursefeeobject.feewithouttax;
          // settotalfeewithouttax((value) => value + coursefeeobject.feewithouttax);
          // settotaltax((value) => value + coursefeeobject.feetax);
          // setGrandtotal((value) => value + coursefeeobject.feewithtax);
          grosstotall = grosstotall + Math.round(feedetails[i].amount * 0.65);
          totaldiscountt =
            totaldiscountt + parseInt(feedetails[i].discount * 0.65);

          totalfeewithouttaxx =
            totalfeewithouttaxx + coursefeeobject.feewithouttax;
          totaltaxx = totaltaxx + coursefeeobject.feetax;
          grandtotall = grandtotall + coursefeeobject.feewithtax;
          array.push(coursefeeobject);
          let materialfeeobject = {
            id: "",
            feetype: "",
            feewithtax: 0,
            feewithouttax: 0,
            feetax: 0,
          };
          materialfeeobject.id = feedetails[i].id;
          materialfeeobject.feetype = "Material Fee";
          materialfeeobject.feewithtax = Math.round(
            feedetails[i].totalamount * 0.35
          );
          materialfeeobject.feewithouttax = materialfeeobject.feewithtax;
          materialfeeobject.feetax = 0;

          // settotalfeewithouttax(
          //   (value) => value + materialfeeobject.feewithouttax
          // );
          // settotaltax((value) => value + materialfeeobject.feetax);
          // setGrandtotal((value) => value + materialfeeobject.feewithtax);
          grosstotall = grosstotall + parseInt(feedetails[i].amount * 0.35);
          totaldiscountt =
            totaldiscountt + parseInt(feedetails[i].discount * 0.35);
          materialfeee =
            materialfeee + Math.round(feedetails[i].totalamount * 0.35);
          // totalfeewithouttaxx =
          //   totalfeewithouttaxx + materialfeeobject.feewithouttax;
          totaltaxx = totaltaxx + materialfeeobject.feetax;
          // grandtotall = grandtotall + materialfeeobject.feewithtax;
          array.push(materialfeeobject);
        }
      }
      setTotalDiscount(totaldiscountt);
      setGrosstotal(grosstotall);
      settotalfeewithouttax(totalfeewithouttaxx);
      settotaltax(totaltaxx);
      setGrandtotal(grandtotall);
      setfeedetailsbilling(array);
      setmaterialfee(materialfeee);
      if (feedetails.length === 0) {
        alert("please enter feedetails");
        return;
      }
      handleNext();
    } else {
      setErrorState((prev) => ({ ...prev, feetype: "Fee type is required" }));
      setErrorState((prev) => ({ ...prev, amount: "Amount is required" }));
    }
  };
  useEffect(() => {
    setfinaltotal(grandtotal + materialfee);
  }, [grandtotal, materialfee]);
  useEffect(() => {
    setdueamount(finaltotal);
  }, [finaltotal]);
  useEffect(() => {
    setTotalamount(amount - discount);
    let actualfee = (totalamount * 100) / 118;

    setTaxamount(totalamount - actualfee);
  });

  // fee binding as per course selected

  useEffect(() => {
    if (feetype === "Admission Fee") {
      setAmount(499);
    }
    if (feetype === "fee") {
      let course = courseState?.courses?.filter(
        (course) =>
          course.course_name === courses &&
          course.course_package === coursepackage
      );
      console.log("course fee", course);
      if (course.length > 0) {
        setAmount(course[0].fee);
      } else {
        setAmount("");
      }
    }
  }, [feetype, courses, coursepackage, courseState]);

  console.log(courseState.courses, "2564");

  const handleFeeDetails = (e) => {
    e.preventDefault();
    let save = true;
    if (feetype === "fee") {
      let course = courseState.courses.filter(
        (course) =>
          course.course_name === courses &&
          course.course_package === coursepackage
      );

      if (
        course.length > 0 &&
        parseInt(discount) > parseInt(course[0].max_discount) &&
        course[0].course_name === courses &&
        course[0].course_package === coursepackage
      ) {
        save = false;
        alert(`Discount cannot be greater than ${course[0].max_discount}`);
      }
    }
    if (save) {
      setFeeDetails([
        ...feedetails,
        {
          id: Date.now(),
          feetype: feetype,
          amount: amount,
          discount: discount,
          taxamount: taxamount,
          totalamount: totalamount,
        },
      ]);
      setfeetype("");
      setAmount("");
      setDiscount("");
      setTaxamount(0);

      setTotalamount(0);
    }
  };
  // * ------------------validations-------------------------------

  const handleBasicDetails = () => {
    if (!name) {
      setErrorState((prev) => ({ ...prev, name: "Please enter the name" }));
      return;
    }
    if (!email) {
      setErrorState((prev) => ({ ...prev, email: "Email is required" }));
      return;
    } else {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailPattern.test(email)) {
        setErrorState((prev) => ({ ...prev, email: "Invalid Email Address" }));
        return;
      }
    }

    if (!birthdate) {
      setErrorState((prev) => ({ ...prev, dob: "Birthdate is required" }));
      return;
    }

    if (!mobilenumber) {
      setErrorState((prev) => ({ ...prev, contact: "Contact is required" }));
      return;
    } else {
      if (mobilenumber.length !== 10) {
        setErrorState((prev) => ({
          ...prev,
          contact: "Incorrect mobile number",
        }));
        return;
      }
    }

    if (!whatsappno) {
      setErrorState((prev) => ({ ...prev, wpNum: "WhatsApp Number required" }));
      return;
    } else {
      if (whatsappno.length !== 10) {
        setErrorState((prev) => ({
          ...prev,
          wpNum: "Incorrect WhatsApp number",
        }));
        return;
      }
    }

    if (!gender) {
      setErrorState((prev) => ({ ...prev, gender: "Gender is required" }));
      return;
    }

    if (!maritalstatus) {
      setErrorState((prev) => ({
        ...prev,
        marital: "Marital status is required",
      }));
      return;
    }

    if (!college) {
      setErrorState((prev) => ({
        ...prev,
        college: "College name is required",
      }));
      return;
    }

    if (!zipcode) {
      setErrorState((prev) => ({ ...prev, pincode: "Pincode is required" }));
      return;
    }
    if (!country) {
      setErrorState((prev) => ({ ...prev, country: "Country is required" }));
      return;
    }
    if (!state) {
      setErrorState((prev) => ({ ...prev, state: "State is required" }));
      return;
    }
    if (!area) {
      setErrorState((prev) => ({ ...prev, area: "Area is required" }));
      return;
    }
    if (!native) {
      setErrorState((prev) => ({ ...prev, native: "Native is required" }));
      return;
    }
    handleNext();
  };

  const handleFeeInput = () => {
    if (!feetype) {
      // setErrorState((prev) => ({ ...prev, country: "Country is required" }));
    }

    if (!amount) {
      return alert("Please enter amount");
    }

    handleNext();
  };

  const handleParentDetails = () => {
    if (!parentsname) {
      setErrorState((prev) => ({
        ...prev,
        parentsname: "Parent Name is required",
      }));

      return;
    }

    if (!parentsnumber) {
      setErrorState((prev) => ({
        ...prev,
        parentsnumber: "Parent Number is required",
      }));

      return;
    } else {
      if (parentsnumber.length !== 10) {
        setErrorState((prev) => ({
          ...prev,
          parentsnumber: "Number is invalid",
        }));

        return;
      }
    }
    handleNext();
  };
  const handleEducationDetails = () => {
    if (!educationtype) {
      setErrorState((prev) => ({
        ...prev,
        educationtype: "Education type is required",
      }));
      return;
    }
    if (!marks) {
      setErrorState((prev) => ({
        ...prev,
        marks: "Percentage is required",
      }));
      return;
    }
    if (!academicyear) {
      setErrorState((prev) => ({
        ...prev,
        academicyear: "Academic Year is required",
      }));
      return;
    }
    if (educationtype === "others") {
      setEducationType(customEducationType);
    }

    handleNext();
  };
  // -----photo start--------------------------------------
  const fileInputRef = useRef(null);
  // const [resizedImage, setResizedImage] = useState(null);

  const [studentImage, setSelectedFile] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const targetSizeInBytes = 45 * 1024;
        const resizedImage = await resizeImage(file, targetSizeInBytes);
        const { width, height } = await getImageSize(resizedImage);
        const sizeInKB = (resizedImage.size / 1024).toFixed(2);
        console.log("Resized Image Dimensions:", { width, height });
        console.log("Resized Image Size:", sizeInKB, "KB");
        setSelectedFile(resizedImage);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    }
  };

  const getImageSize = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };

      img.onerror = (error) => {
        reject(error);
      };

      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const resizeImage = async (file, targetSize) => {
    const img = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    img.src = URL.createObjectURL(file);

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    let width = img.width;
    let height = img.height;
    let resizedFile = file;

    while (resizedFile.size > targetSize) {
      width *= 0.9;
      height *= 0.9;

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/jpeg", 0.85);
      });

      resizedFile = new File([blob], file.name, { type: blob.type });
    }

    return resizedFile;
  };

  const handlePhoto = () => {
    // const maxSizeInBytes = 45 * 1024; // 40 KB in bytes
    // if (studentImage.size > maxSizeInBytes) {
    //   alert("Image size is too large. Maximum allowed size is 45 KB");
    //   return;
    // }

    // Image size is within the limit, proceed to the next step
    handleNext();
  };

  // ----photo end--------------------------------------------
  const handleAdmissionDetails = () => {
    if (!enquirydate) {
      setErrorState((prev) => ({
        ...prev,
        enquirydate: "Enquiry Date is required",
      }));
      return;
    } else if (!enquirytakenby) {
      setErrorState((prev) => ({
        ...prev,
        enquirytakenby: "Enquiry Taken by is required",
      }));
      return;
    } else if (!coursepackage) {
      setErrorState((prev) => ({
        ...prev,
        coursepackage: "Course Package is required",
      }));
      return;
    } else if (!courses) {
      setErrorState((prev) => ({ ...prev, courses: "Courses is required" }));
      return;
    } else if (!leadsource) {
      setErrorState((prev) => ({
        ...prev,
        leadsource: "Lead Source is required",
      }));
      return;
    }
    if (
      leadsource[0].source
        .toLowerCase()
        .split(" ")
        .filter(Boolean)
        .join(" ") === "student referral" ||
      leadsource[0].source
        .toLowerCase()
        .split(" ")
        .filter(Boolean)
        .join(" ") === "employee referral"
    ) {
      setLeadSource([CustomLeadSource]);
    } else if (!branch) {
      setErrorState((prev) => ({ ...prev, branch: "Branch is required" }));
      return;
    } else if (!modeoftraining) {
      setErrorState((prev) => ({
        ...prev,
        modeoftraining: "Mode of Training is required",
      }));
      return;
    } else if (!admissiondate) {
      setErrorState((prev) => ({
        ...prev,
        admissiondate: "Admission Date is required",
      }));
      return;
    } else if (!validitystartdate) {
      setErrorState((prev) => ({
        ...prev,
        validitystartdate: "Validity Start Date is required",
      }));
      return;
    } else if (!validityenddate) {
      setErrorState((prev) => ({
        ...prev,
        validityenddate: "Validity End Date is required",
      }));
      return;
    }

    handleNext();
  };

  useEffect(() => {
    const today = new Date(validitystartdate);
    const futureDate = new Date(
      today.getFullYear(),
      today.getMonth() + 10,
      today.getDate()
    );

    // Format the future date as a string (e.g., "YYYY-MM-DD")
    const formattedFutureDate = `${futureDate.getFullYear()}-${(
      futureDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${futureDate.getDate().toString().padStart(2, "0")}`;
    setValidityEndDate(formattedFutureDate);
  }, [validitystartdate]);

  const handleReset = () => {};
  // useEffect(() => {
  //   setuserid(user.id);
  // }, [user]);

  useEffect(() => {
    // Clear error messages on change
    setErrorState((prev) => ({
      ...prev,
      name: "",
      email: "",
      dob: "",
      contact: "",
      wpNum: "",
      gender: "",
      marital: "",
      college: "",
      pincode: "",
      country: "",
      state: "",
      area: "",
      native: "",
      parentsname: "",
      parentsnumber: "",
      educationtype: "",
      marks: "",
      academicyear: "",
      enquirydate: "",
      enquirytakenby: "",
      coursepackage: "",
      courses: "",
      leadsource: "",
      branch: "",
      modeoftraining: "",
      admissiondate: "",
      validitystartdate: "",
      validityenddate: "",
      feetype: "",
      amount: "",
    }));
  }, [
    name,
    email,
    birthdate,
    mobilenumber,
    whatsappno,
    gender,
    maritalstatus,
    college,
    zipcode,
    country,
    state,
    area,
    native,
    parentsname,
    parentsnumber,
    educationtype,
    marks,
    academicyear,
    enquirydate,
    enquirytakenby,
    coursepackage,
    courses,
    leadsource,
    branch,
    modeoftraining,
    admissiondate,
    validitystartdate,
    validityenddate,
    feetype,
    amount,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // * registration number start
    let registrationnumber;
    // let filterbranch
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/getstudent_data`
    );
    const filterbranch = response.data.filter((item) => item.branch === branch);

    const branchCount = filterbranch.length;
    let last_serial_num = 0;
    if (filterbranch.length > 0) {
      let last_Reg_num_of_that_branch = filterbranch[0].registrationnumber;
      last_serial_num = last_Reg_num_of_that_branch.slice(-4);
      last_serial_num = parseInt(last_serial_num);
    }
    let date = toString(admissiondate);
    let DD = admissiondate[8] + admissiondate[9];
    let month = admissiondate[5] + admissiondate[6];
    let year = admissiondate[2] + admissiondate[3];
    let firstbranch;
    if (branch) {
      firstbranch = branch[0].toUpperCase();
    }

    let serialno;
    if (branch) {
      serialno = last_serial_num + 1;
    }
    if (serialno) {
      // serialno = serialno + 500;
      serialno = serialno.toString();
      if (serialno.length === 3) {
        serialno = "0" + serialno;
      }
      if (serialno.length === 2) {
        serialno = "00" + serialno;
      }
      if (serialno.length === 1) {
        serialno = "000" + serialno;
      }
    }

    registrationnumber = `TA${firstbranch}${DD}${month}${year}${serialno}`;

    //registration number end
    const reader = new FileReader();

    reader.onload = async () => {
      // Read the student image as a data URL
      const photoData = reader.result.split(",")[1];

      // Validate the form data
      if (!admissionremarks) {
        alert("Please enter admission remarks");
        return;
      }
      if (!assets) {
        alert("Please enter assets");
        return;
      }

      // Create the data object with the form fields
      let studentRegistrationdata = {
        name,
        email,
        mobilenumber,
        parentsname,
        parentsnumber,
        birthdate,
        gender,
        maritalstatus,
        college,
        country,
        state,
        area,
        native,
        zipcode,
        whatsappno,
        educationtype,
        marks,
        academicyear,
        filename: studentImage.name,
        data: photoData,
        enquirydate,
        enquirytakenby,
        coursepackage,
        courses,
        leadsource,
        branch,
        modeoftraining,
        registrationnumber,
        admissiondate,
        validitystartdate,
        validityenddate,
        feedetails,
        grosstotal,
        totaldiscount,
        totaltax,
        grandtotal,
        finaltotal,
        admissionremarks,
        assets,
        totalinstallments,
        dueamount,
        addfee,
        initialpayment,
        duedatetype,
        installments,
        materialfee,
        feedetailsbilling,
        totalfeewithouttax,
        totalpaidamount,
        student_status,
        user_id,
        certificate_status,
        extra_discount,
      };
      console.log("studentRegistrationdata", studentRegistrationdata);
      ///title case
      studentRegistrationdata = [studentRegistrationdata];
      const dataWithTitleCase = studentRegistrationdata.map((item) => {
        const newItem = {};

        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            if (typeof item[key] === "string" && key !== "email") {
              newItem[key] = item[key]
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
            } else {
              newItem[key] = item[key];
            }
          }
        }

        return newItem;
      });
      studentRegistrationdata = dataWithTitleCase[0];
      try {
        // Make the POST request
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/student_form`,
          studentRegistrationdata
        );

        // Handle the response as needed
        console.log("Response:", response.data);
        if (response.data.status === "exists" || response.status === 400) {
          alert(response.data.field + " already " + response.data.Status);
          return false;
        }

        const id = response.data.insertId;
        let updateContext = studentRegistrationdata;
        updateContext.id = response.data.insertId;
        // dispatch({
        //   type: "CREATE_STUDENT",
        //   payload: updateContext,
        // });
        navigate(`/feeview/${id}`);

        // You can navigate to another page or perform other actions here.
      } catch (error) {
        // Handle errors
        if (error.response) {
          console.log(
            "Server returned an error:",
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.error("Request error:", error.message);
        }
      }
    };

    // Read the student image as a data URL
    reader.readAsDataURL(studentImage);
  };

  // const { users } = useUsersContext();
  const [filteredcounsellor, setfilteredcounsellor] = useState([]);

  // useEffect(() => {
  //   if (users) {
  //     const filteruser = users.filter((user) => {
  //       const filtercounsellar = user.profile === "counsellor";
  //       return filtercounsellar;
  //     });
  //     setfilteredcounsellor(filteruser);
  //   }
  // }, [users]);
  const [studentData, setStudentData] = useState([{ name }, { name }]);
  useEffect(() => {
    if (studentImage) {
      displayImage(studentImage);
    }
  }, [studentImage]);
  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios
      .get(`${process.env.REACT_APP_API_URL}/getstudent_data`)
      .then((response) => {
        // Handle the successful response here
        setStudentData(response.data); // Update the data state with the fetched data

        console.log("data", response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFeeDelete = (id) => {
    const updatedTasks = feedetails.filter((task) => task.id !== id);
    setFeeDetails(updatedTasks);
  };

  const fetchData = async () => {
    if (zipcode && zipcode.length > 2) {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${zipcode}`
        );

        if (response.data.length > 0) {
          const postOffice = response.data[0]?.PostOffice[0];

          if (postOffice) {
            const {
              Region: city,
              State: state,
              Country: country,
              Block: area,
            } = postOffice;

            setCountry(country);
            setState(state);
            setArea(area || "");
            setNative(city || "");
          } else {
            // Clear the state if no post office data is available
            setCountry("");
            setState("");
            setArea("");
            setNative("");
          }
        } else {
          // Clear the state if no data is returned
          setCountry("");
          setState("");
          setArea("");
          setNative("");
        }
      } catch (error) {
        console.error("Error fetching location information:", error);
        // Handle error as needed
      }
    } else {
      // Clear the state if the pincode is not valid
      setCountry("");
      setState("");
      setArea("");
      setNative("");
    }
  };

  useEffect(() => {
    fetchData();
  }, [zipcode]);

  function handleNext() {
    setActiveTab((prevActiveTab) => prevActiveTab + 1);
  }

  const handlePrev = () => {
    setActiveTab((prevActiveTab) => prevActiveTab - 1);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault(); // Prevent default behavior of arrow keys
    }
  };
  return (
    <div className="container-fluid">
      <div className="registration_form_section  ">
        <div className="top">
          <div className="registration_form_tabs row">
            <div className="button_grp col-lg-12 p-0">
              <button
                type="button"
                className={
                  activeTab === 1
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Student Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 2
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Parent Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 3
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Education Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 4
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Admission Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 5
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Fee Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 6
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Billing
              </button>
              <button
                type="button"
                className={
                  activeTab === 7
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Others
              </button>
              <button
                type="button"
                className={
                  activeTab === 8
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
              >
                Preview
              </button>
            </div>
          </div>
        </div>
        <div className="bottom mt-3">
          <form className="" onSubmit={handleSubmit}>
            {/* Student Details Start */}
            {activeTab === 1 && (
              <>
                <div className="row">
                  <div className="form-group text-start col-lg-3 ">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rname"
                    >
                      Name*
                    </label>
                    <input
                      className={
                        errorState && errorState.name
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rname"
                      type="text"
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="Enter your name"
                    />
                    {errorState && errorState.name && (
                      <p className="text-danger m-0 fs-xs">{errorState.name}</p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="remail"
                    >
                      Email*
                    </label>
                    <input
                      className={
                        errorState && errorState.email
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="remail"
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter your email address"
                    />
                    {errorState && errorState.email && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.email}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      htmlhtmlFor="rphoto"
                      className="form-label fs-s text_color"
                    >
                      Choose your photo*
                    </label>
                    <input
                      className={
                        errorState && errorState.photo
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rphoto"
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                    />
                    {errorState && errorState.photo && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.photo}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rdob"
                    >
                      Date of Birth*
                    </label>
                    <input
                      className={
                        errorState && errorState.dob
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rdob"
                      type="date"
                      onChange={(e) => setBirthDate(e.target.value)}
                      value={birthdate}
                      onKeyDown={handleKeyDown}
                    />
                    {errorState && errorState.dob && (
                      <p className="text-danger m-0 fs-xs">{errorState.dob}</p>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rcontactnum"
                    >
                      Contact Number*
                    </label>
                    <input
                      className={
                        errorState && errorState.contact
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rcontactnum"
                      type="number"
                      onKeyDown={handleKeyDown}
                      placeholder="Enter Contact Number"
                      required
                      onChange={(e) => setMobileNumber(e.target.value)}
                      value={mobilenumber}
                    />
                    {errorState && errorState.contact && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.contact}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rwhatsappnum"
                    >
                      Whatsapp Number*
                    </label>
                    <input
                      className={
                        errorState && errorState.wpNum
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rwhatsappnum"
                      type="number"
                      required
                      onChange={(e) => setWhatsAppNo(e.target.value)}
                      value={whatsappno}
                      onKeyDown={handleKeyDown}
                      placeholder="Enter WhatsApp number"
                    />
                    {errorState && errorState.wpNum && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.wpNum}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="gender"
                    >
                      Gender*
                    </label>
                    <select
                      className={
                        errorState && errorState.gender
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      id="gender"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                    >
                      <option selected="" className="fs-s">
                        Select your Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errorState && errorState.gender && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.gender}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="maritalstatus"
                    >
                      Marital Status*
                    </label>
                    <select
                      className={
                        errorState && errorState.marital
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      id="maritalstatus"
                      name="maritalstatus"
                      required
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      value={maritalstatus}
                    >
                      <option selected="">Your Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                    {errorState && errorState.marital && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.marital}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rcscname"
                    >
                      College/School/Company*
                    </label>
                    <input
                      className={
                        errorState && errorState.college
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rcscname"
                      type="text"
                      required
                      onChange={(e) => setCollege(e.target.value)}
                      value={college}
                      onKeyDown={handleKeyDown}
                      placeholder="College/School/Company"
                    />
                    {errorState && errorState.college && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.college}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rpincode"
                    >
                      Pincode*
                    </label>
                    <input
                      className={
                        errorState && errorState.pincode
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rpincode"
                      type="number"
                      required
                      onChange={(e) => setZipcode(e.target.value)}
                      value={zipcode}
                      onKeyDown={handleKeyDown}
                      placeholder="Enter your pincode"
                    />
                    {errorState && errorState.pincode && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.pincode}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rcountry"
                    >
                      Country*
                    </label>
                    <input
                      className={
                        errorState && errorState.country
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rcountry"
                      type="text"
                      required
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      placeholder="Enter your Country"
                    />
                    {errorState && errorState.country && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.country}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rstate"
                    >
                      State*
                    </label>
                    <input
                      className={
                        errorState && errorState.state
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rstate"
                      type="text"
                      required
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                      placeholder="Enter your State"
                    />
                    {errorState && errorState.state && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.state}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rnative"
                    >
                      Native Place*
                    </label>
                    <input
                      className={
                        errorState && errorState.native
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rnative"
                      type="text"
                      required
                      onChange={(e) => setNative(e.target.value)}
                      value={native}
                      placeholder="Enter your Native Place"
                    />
                    {errorState && errorState.native && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.native}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rarea"
                    >
                      Area*
                    </label>
                    <input
                      className={
                        errorState && errorState.area
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rarea"
                      type="text"
                      required
                      onChange={(e) => setArea(e.target.value)}
                      value={area}
                      placeholder="Enter your Area"
                    />
                    {errorState && errorState.area && (
                      <p className="text-danger m-0 fs-xs">{errorState.area}</p>
                    )}
                  </div>
                </div>
                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab !== 8 && (
                      <button
                        type="button"
                        className="btn  right btn_primary "
                        onClick={handleBasicDetails}
                      >
                        Continue
                        <span className="label-icon">
                          <IoMdArrowForward />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Student Details End */}

            {/* Parent Details start */}
            {activeTab === 2 && (
              <>
                <div className="row">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rparentname"
                    >
                      Parent's Name*
                    </label>
                    <input
                      className={
                        errorState && errorState.parentsname
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rparentname"
                      type="text"
                      required
                      onChange={(e) => setParentsName(e.target.value)}
                      value={parentsname}
                      placeholder="Enter your Parent's Name"
                    />
                    {errorState && errorState.parentsname && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.parentsname}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rparentscontact"
                    >
                      Parent's Contact*
                    </label>
                    <input
                      className={
                        errorState && errorState.parentsnumber
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rparentscontact"
                      type="number"
                      required
                      onChange={(e) => SetParentsNumber(e.target.value)}
                      value={parentsnumber}
                      onKeyDown={handleKeyDown}
                      placeholder="Enter your Parent's contact"
                    />
                    {errorState && errorState.parentsnumber && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.parentsnumber}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rgender"
                    >
                      Relation*
                    </label>
                    <select
                      class="form-select form-control input_bg_color"
                      aria-label="Default select example"
                      id="rrelation"
                    >
                      <option selected="" className="fs-s">
                        --Select--
                      </option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Brother">Brother</option>
                      <option value="Sister">Sister</option>
                      <option value="Uncle">Uncle</option>
                      <option value="Aunt">Aunt</option>
                    </select>
                  </div>
                </div>
                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab !== 8 && (
                      <button
                        type="button"
                        className="btn  right btn_primary "
                        onClick={handleParentDetails}
                      >
                        Continue
                        <span className="label-icon">
                          <IoMdArrowForward />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Parent Details end */}

            {/* Education Details Start */}
            {activeTab === 3 && (
              <>
                <div className="row">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="educationtype"
                    >
                      Education Type*
                    </label>
                    <select
                      className={
                        errorState && errorState.educationtype
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      id="educationtype"
                      name="educationtype"
                      required
                      onChange={handleEducationSelectChange}
                      value={educationtype}
                    >
                      <option selected="" className="fs-s">
                        ---Select---
                      </option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="MCA">MCA</option>
                      <option value="SSC">SSC</option>
                      <option value="Other">Other</option>
                    </select>
                    {errorState && errorState.educationtype && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.educationtype}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rpercentage"
                    >
                      Percentage*
                    </label>
                    <input
                      className={
                        errorState && errorState.marks
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rpercentage"
                      type="number"
                      required
                      onChange={(e) => setMarks(e.target.value)}
                      value={marks}
                      onKeyDown={handleKeyDown}
                      placeholder="Enter your percentage"
                    />
                    {errorState && errorState.marks && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.marks}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="racademicyear"
                    >
                      Academic Year*
                    </label>
                    <input
                      className={
                        errorState && errorState.academicyear
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="racademicyear"
                      type="date"
                      required
                      onChange={(e) => setAcademicyear(e.target.value)}
                      value={academicyear}
                    />
                    {errorState && errorState.academicyear && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.academicyear}
                      </p>
                    )}
                  </div>
                </div>
                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab !== 8 && (
                      <button
                        type="button"
                        className="btn  right btn_primary "
                        onClick={handleEducationDetails}
                      >
                        Continue
                        <span className="label-icon">
                          <IoMdArrowForward />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Education Details End */}

            {/* Admission Details Start */}
            {activeTab === 4 && (
              <>
                <div className="row">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="renqiurydate"
                    >
                      Enquiry Date*
                    </label>
                    <input
                      className={
                        errorState && errorState.enquirydate
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="renqiurydate"
                      type="date"
                      required
                      onChange={(e) => setEnquiryDate(e.target.value)}
                      value={enquirydate}
                    />
                    {errorState && errorState.enquirydate && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.enquirydate}
                      </p>
                    )}
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="renqtakeby"
                    >
                      Enquiry taken by*
                    </label>
                    <input
                      className={
                        errorState && errorState.enquirytakenby
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="renqtakeby"
                      type="text"
                      name="renqtakeby"
                      required
                      value={enquirytakenby}
                      placeholder="Enter your Counsellor Name"
                    />
                    {errorState && errorState.enquirytakenby && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.enquirytakenby}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="coursepackage"
                    >
                      Course Package*
                    </label>
                    <select
                      className={
                        errorState && errorState.coursepackage
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      name="coursepackage"
                      required
                      onChange={(e) => setCoursepakage(e.target.value)}
                      value={coursepackage}
                    >
                      <option selected="">--Select--</option>

                      {coursePackageState &&
                        coursePackageState?.coursepackages?.map(
                          (item, index) => (
                            <option
                              key={item.id}
                              value={item.coursepackages_name}
                            >
                              {item.coursepackages_name}
                            </option>
                          )
                        )}
                    </select>
                    {errorState && errorState.coursepackage && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.coursepackage}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="courses"
                    >
                      Course*
                    </label>
                    <select
                      className={
                        errorState && errorState.courses
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      id="courses"
                      name="courses"
                      required
                      onChange={(e) => setCourses(e.target.value)}
                      value={courses}
                    >
                      <option selected="">--Select--</option>
                      {courseState?.courses &&
                        courseState?.courses?.map((item, index) => (
                          <option key={item.id} value={item.course_name}>
                            {item.course_name}
                            {console.log(`Item: ${item}`)}
                          </option>
                        ))}
                    </select>
                    {errorState && errorState.courses && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.courses}
                      </p>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="form-group text-start col-lg-3 ">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="leadsource"
                    >
                      Lead Source*
                    </label>
                    <select
                      className={
                        errorState && errorState.leadsource
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      id="leadsource"
                      required
                      onChange={handleLeadSourceSelectChange}
                      value={leadsource.source}
                    >
                      <option selected="">--Select--</option>
                      {leadSourceState?.leadSources &&
                        leadSourceState?.leadSources?.map((item, index) => (
                          <option key={item.id} value={item.leadsource}>
                            {item.leadsource}
                          </option>
                        ))}
                    </select>
                    {errorState && errorState.leadsource && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.leadsource}
                      </p>
                    )}
                    {leadsourceOptions && (
                      <div className="mt-3">
                        <label
                          htmlFor=""
                          className="form-label fs-s text_color"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control input_bg_color"
                          required
                          onChange={(e) =>
                            setCustomLeadSource((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          value={CustomLeadSource.name || ""}
                        />
                        <label
                          htmlFor=""
                          className="form-label fs-s text_color"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          className="form-control input_bg_color"
                          required
                          onChange={(e) =>
                            setCustomLeadSource((prev) => ({
                              ...prev,
                              mobileNumber: e.target.value,
                            }))
                          }
                          value={CustomLeadSource.mobileNumber || ""}
                        />
                      </div>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="branch"
                    >
                      Branch*
                    </label>
                    <select
                      className={
                        errorState && errorState.branch
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      id="branch"
                      required
                      onChange={(e) => setBranch(e.target.value)}
                      value={branch}
                    >
                      <option selected="">--Select--</option>
                      {BranchState?.branches &&
                        BranchState?.branches.map((item, index) => (
                          <option key={item.id} value={item.branch_name}>
                            {item.branch_name}
                          </option>
                        ))}
                    </select>
                    {errorState && errorState.branch && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.branch}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="modeoftraining"
                    >
                      Mode Of Training*
                    </label>
                    <select
                      className={
                        errorState && errorState.modeoftraining
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      id="modeoftraining"
                      required
                      onChange={(e) => setModeOfTraining(e.target.value)}
                      value={modeoftraining}
                    >
                      <option selected="">--Select--</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                    {errorState && errorState.modeoftraining && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.modeoftraining}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="radmissiondate"
                    >
                      Admission Date*
                    </label>
                    <input
                      className={
                        errorState && errorState.admissiondate
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="radmissiondate"
                      type="date"
                      name="radmissiondate"
                      required
                      onChange={(e) => setAdmissionDate(e.target.value)}
                      value={admissiondate}
                    />
                    {errorState && errorState.admissiondate && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.admissiondate}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rvaliditystartdate"
                    >
                      Validity Start Date*
                    </label>
                    <input
                      className={
                        errorState && errorState.validitystartdate
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rvaliditystartdate"
                      type="date"
                      name="rvaliditystartdate"
                      onChange={(e) => setValidityStartDate(e.target.value)}
                      value={validitystartdate}
                      required
                    />
                    {errorState && errorState.validitystartdate && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.validitystartdate}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rvalidityenddate"
                    >
                      Validity End Date*
                    </label>
                    <input
                      className={
                        errorState && errorState.validityenddate
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="rvalidityenddate"
                      type="date"
                      name="rvalidityenddate"
                      onChange={(e) => setValidityEndDate(e.target.value)}
                      value={validityenddate}
                      required
                    />
                    {errorState && errorState.validityenddate && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.validityenddate}
                      </p>
                    )}
                  </div>
                </div>

                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab !== 8 && (
                      <button
                        type="button"
                        className="btn  right btn_primary "
                        onClick={handleAdmissionDetails}
                      >
                        Continue
                        <span className="label-icon">
                          <IoMdArrowForward />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Admission Details End */}

            {/* Fee Details Start */}
            {activeTab === 5 && (
              <>
                <div className="row">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rwhatsappnum"
                    >
                      Fee Type*
                    </label>
                    <select
                      className={
                        errorState && errorState.feetype
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      aria-label="Default select example"
                      name="Fee Type"
                      required
                      onChange={(e) => setfeetype(e.target.value)}
                      value={feetype}
                    >
                      <option selected="">--Select--</option>
                      <option value="Admission Fee">Admission Fee</option>
                      <option value="fee">Fee</option>
                    </select>
                    {errorState && errorState.feetype && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.feetype}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="courseamount"
                    >
                      Amount*
                    </label>
                    <input
                      className={
                        errorState && errorState.amount
                          ? "form-control input_bg_color error-input"
                          : "form-control input_bg_color"
                      }
                      id="courseamount"
                      type="number"
                      name="courseamount"
                      onKeyDown={handleKeyDown}
                      placeholder="Enter Course Amount"
                      required
                      onChange={(e) => setAmount(e.target.value)}
                      value={amount}
                    />
                    {errorState && errorState.amount && (
                      <p className="text-danger m-0 fs-xs">
                        {errorState.amount}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="discount"
                    >
                      Discount*
                    </label>
                    <input
                      className={"form-control input_bg_color"}
                      id="discount"
                      type="number"
                      name="discount"
                      onKeyDown={handleKeyDown}
                      placeholder="Enter Discount"
                      required
                      onChange={(e) => setDiscount(e.target.value)}
                      value={discount}
                    />
                  </div>

                  <div className="col-lg-3 form-group text-start align-middle mt-4 pt-2">
                    <button
                      onClick={handleFeeDetails}
                      className="btn btn_primary fs-13"
                    >
                      Save
                    </button>
                  </div>
                </div>
                {feedetails.length > 0 && (
                  <div className="row mt-3">
                    <div className="col-xl-12 ">
                      <div className="table-responsive ">
                        <table className="table table-hover align-midle table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color"
                              >
                                Fee Type
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Amount
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Discount
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Tax Amount
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Total Amount
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {feedetails.length > 0 &&
                              feedetails.map((item) => (
                                <tr key={item.id}>
                                  <td className="fw-medium fs_13 ">
                                    {item.feetype}
                                  </td>
                                  <td className="fs_13 ">{item.amount}</td>
                                  <td className="fs_13 ">{item.discount}</td>
                                  <td className="fs_13 ">
                                    {parseFloat(item.taxamount.toFixed(2))}
                                  </td>
                                  <td className="fs_13 ">{item.totalamount}</td>
                                  <td onClick={() => handleFeeDelete(item.id)}>
                                    <MdDelete />
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab !== 8 && (
                      <button
                        type="button"
                        className="btn  right btn_primary "
                        onClick={handleFeecalculations}
                      >
                        Continue
                        <span className="label-icon">
                          <IoMdArrowForward />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Fee Details End */}

            {/* Billing Start */}
            {activeTab === 6 && (
              <>
                <div className="row">
                  <div className="col-xl-12 ">
                    <div className="table-responsive ">
                      <table className="table table-hover align-midle table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Gross Total
                            </th>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Total Discount
                            </th>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Total Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fs_13 ">{grosstotal}</td>
                            <td className="fs_13 ">{totaldiscount}</td>
                            <td className="fs_13 ">{finaltotal}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-xl-12 ">
                    <div className="table-responsive mt-2 ">
                      <table className="table table-hover align-midle table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Fee Type
                            </th>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Fee (Excl. of GST)
                            </th>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Tax
                            </th>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Fee (Incl. of GST)
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {feedetailsbilling.length > 0 &&
                            feedetailsbilling.map((item) => {
                              if (item.feetype !== "Material Fee") {
                                return (
                                  <tr key={item.id}>
                                    <td className=" fs_13">{item.feetype}</td>
                                    <td className=" fs_13">
                                      {parseFloat(
                                        item.feewithouttax.toFixed(2)
                                      )}
                                    </td>
                                    <td className=" fs_13">
                                      {parseFloat(item.feetax.toFixed(2))}
                                    </td>
                                    <td className=" fs_13">
                                      {parseFloat(item.feewithtax.toFixed(2))}
                                    </td>
                                  </tr>
                                );
                              }
                            })}

                          {feedetailsbilling.length > 0 && (
                            <tr>
                              <td className="fw-medium fs_13">
                                <b>Sub Total</b>
                              </td>
                              <td className=" fs_13">
                                {parseFloat(totalfeewithouttax.toFixed(2))}
                              </td>
                              <td className=" fs_13">
                                {parseFloat(totaltax.toFixed(2))}
                              </td>
                              <td className=" fs_13">
                                {parseFloat(grandtotal.toFixed(2))}
                              </td>
                            </tr>
                          )}

                          <tr>
                            <td rowSpan={3} />
                            <td rowSpan={3} />
                            <td className="fs_13">Material Fee</td>
                            <td className="fs_13">{materialfee}</td>
                          </tr>
                          <tr>
                            <td className="fw-medium fs_13">
                              <strong> Grand Total</strong>
                            </td>
                            <td className="fs_13">{finaltotal}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab !== 8 && (
                      <button
                        type="button"
                        className="btn  right btn_primary "
                        onClick={handleNext}
                      >
                        Continue
                        <span className="label-icon">
                          <IoMdArrowForward />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Billing End */}

            {/* Others Start */}
            {activeTab === 7 && (
              <>
                <div className="row">
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-label fs-s text_color"
                      htmlFor="rremarks"
                    >
                      Remarks*
                    </label>
                    <input
                      className="form-control"
                      id="rremarks"
                      type="text"
                      name="rremarks"
                      placeholder="Enter your Remarks"
                      required
                      onChange={(e) => setadmissionremarks(e.target.value)}
                      value={admissionremarks}
                    />
                  </div>
                  <div className="form-group text-start col-lg-3">
                    <label
                      className="form-check-label fs-s text_color"
                      for="cardtableCheck"
                    >
                      Assets
                    </label>

                    <div className="w-100 ">
                      <div className="form-check ">
                        <label
                          className="form-check-label fs-s text_color"
                          for="cardtableCheck"
                        >
                          Bag
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="cardtableCheck"
                          name="bag"
                          checked={assets.includes("bag")}
                          onChange={handleAssetChange}
                        />
                      </div>

                      <div className="form-check ">
                        <label
                          className="form-check-label fs-s text_color"
                          for="cardtableCheck"
                        >
                          Laptop
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="cardtableCheck"
                          name="laptop"
                          checked={assets.includes("laptop")}
                          onChange={handleAssetChange}
                        />
                      </div>

                      <div className="form-check ">
                        <label
                          className="form-check-label fs-s text_color"
                          for="cardtableCheck"
                        >
                          LMS
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="cardtableCheck"
                          name="lms"
                          checked={assets.includes("lms")}
                          onChange={handleAssetChange}
                        />
                      </div>

                      <div className="form-check ">
                        <label
                          className="form-check-label fs-s text_color"
                          for="cardtableCheck"
                        >
                          Course Material
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="cardtableCheck"
                          name="courseMaterial"
                          checked={assets.includes("courseMaterial")}
                          onChange={handleAssetChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab !== 8 && (
                      <button
                        type="button"
                        className="btn  right btn_primary "
                        onClick={handleNext}
                      >
                        Continue
                        <span className="label-icon">
                          <IoMdArrowForward />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Others End */}

            {/* Preview Starts */}
            {activeTab === 8 && (
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 text-center">
                      <img
                        className="img-fluid "
                        src={imageUrl}
                        alt="user_img"
                        width={"50%"}
                      />
                    </div>
                    <div className="col-lg-4">
                      <p className="text_color">
                        <b className="prev_bold">Name:</b> {name}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Email:</b> {email}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Date Of Birth:</b> {birthdate}
                      </p>
                      <p className="">
                        <b className="prev_bold">Number:</b> {mobilenumber}
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <p className="text_color">
                        <b className="prev_bold">WhatsApp Number:</b>{" "}
                        {whatsappno}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Gender:</b> {gender}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Marital Status:</b>{" "}
                        {maritalstatus}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">College/School/Company:</b>{" "}
                        {college}
                      </p>
                    </div>

                    <div className="col-lg-4">
                      <p className="text_color">
                        <b className="prev_bold">Pincode:</b> {zipcode}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Country:</b> {country}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">State:</b> {state}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Native Place:</b> {native}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Area:</b> {area}
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <p className="text_color">
                        <b className="prev_bold">Parent's Name:</b>{" "}
                        {parentsname}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Parent's Number:</b>{" "}
                        {mobilenumber}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Relation:</b> Other
                      </p>
                    </div>

                    <div className="col-lg-4">
                      <p className="text_color">
                        <b className="prev_bold">Education Type:</b>{" "}
                        {educationtype}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Percentage:</b> {marks}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Academic Year:</b>{" "}
                        {academicyear}
                      </p>
                    </div>

                    <div className="col-lg-4">
                      <p className="text_color">
                        <b className="prev_bold">Enquiry Date:</b> {enquirydate}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Enquiry taken by:</b>{" "}
                        {enquirytakenby}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Course Package:</b>{" "}
                        {coursepackage}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Course:</b> {courses}
                      </p>
                    </div>

                    <div className="col-lg-4">
                      {/* <p className="text_color">
                        <b className="prev_bold">Lead Source:</b> 12345
                      </p> */}
                      <p className="text_color">
                        <b className="prev_bold">Branch:</b> {branch}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Mode Of Training:</b>{" "}
                        {modeoftraining}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Admission Date:</b>{" "}
                        {admissiondate}
                      </p>
                    </div>

                    <div className="col-lg-4">
                      <p className="text_color">
                        <b className="prev_bold"> Validity Start Date:</b>{" "}
                        {validitystartdate}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Validity End Date:</b>{" "}
                        {validityenddate}
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="table-responsive mt-2 ">
                        <table className="table table-hover align-midle table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Fee Type
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Amount
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Discount
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Tax Amount (Inclusive of GST)
                              </th>
                              <th
                                scope="col"
                                className="fs_14 lh_xs black_color fw_600"
                              >
                                Total Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {feedetails &&
                              feedetails.map((item, index) => (
                                <tr key={index}>
                                  <td className="fs-13">{item.feetype}</td>
                                  <td className="fs-13">{item.amount}</td>
                                  <td className="fs-13">{item.discount}</td>
                                  <td className="fs-13">
                                    {parseFloat(item.taxamount).toFixed(2)}
                                  </td>
                                  <td className="fs-13">
                                    {item.feetype === "fee" ? (
                                      <>
                                        Materialfee:{materialfee}&nbsp; ,
                                        CourseFee:
                                        {item.totalamount - materialfee}
                                      </>
                                    ) : (
                                      <span></span>
                                    )}
                                    <br />
                                    <b>{item.totalamount}</b>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <p className="text_color">
                        <b className="prev_bold"> Remarks:</b>{" "}
                        {admissionremarks}
                      </p>
                      <p className="text_color">
                        <b className="prev_bold">Assets:</b>{" "}
                        {assets.map((item, index) => (
                          <span key={index}>
                            {index === assets.length - 1 ? item : item + ", "}{" "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="controls d-flex justify-content-between  mt-4">
                  <div>
                    {activeTab !== 1 && (
                      <button
                        type="button"
                        className="btn control_prev_btn reg_btn"
                        onClick={handlePrev}
                      >
                        <span>
                          <IoMdArrowBack className="button_icons" />
                        </span>
                        Go Back
                      </button>
                    )}
                  </div>

                  <div>
                    {activeTab === 8 && (
                      <button
                        type="submit"
                        className="btn  right btn_primary "
                        onClick={handleSubmit}
                      >
                        Submit
                        <span className="label-icon">
                          <IoMdCheckmark />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Preview ENd */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
