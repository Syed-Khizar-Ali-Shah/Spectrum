import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Diary from "./Diary";
import Patient from "./Patient";
import Communication from "./Communication";
import Tasks from "./Tasks";
import Stock from "./Stock";
import Reporting from "./Reporting";
import Admin from "./Admin";
import UserManagement from "./UserManagement";
import Till from "./Till";
import GOS1 from "./GOS1";
import GOS3 from "./GOS3";
import GOS4 from "./GOS4";
import GOS6 from "./GOS6";
import NewSightTest from "./NewSightTest";
import { useState, useEffect } from "react";
import Login from "./Login";
import "./Responsive.css";
import NewCLTest from "./NewCLTest";
import CLAftercare from "./CLAftercare";
import PreScreening from "./PreScreening";
import NewDispense from "./NewDispense";
import PatientNew from "./PatientNew";
import SalesSummary from "./SalesSummary";
import SalesDetails from "./SalesDetails";
import StaffPerformance from "./StaffPerformance";
import Kpis from "./Kpis";
import Singup from "./Signup";
import Signup from "./Signup";
import EditUser from "./EditUser";
import Signin from "./Signin";
import Protected from "./Protected";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setSearchPatients } from "./redux/spectrumSlice";
import axios from "axios";
import { baseUrl } from "./utils/data";
import CreateDoctorForm from "./CreateDoctorForm";

function App() {
  const user = useSelector((state) => state.spectrumReducer.user);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (patient) => {
    dispatch(setSearchPatients(patient));
    setShowSearch(false);
  };

  const handleSearch = async () => {
    console.log("s", searchValue);
    try {
      const response = await axios.get(
        `${baseUrl}/api/search?value=${searchValue}`
      );
      // if(response.data.length === 0) {
      //   alert("No result found")
      //   setShowSearch(false);
      //   return
      // }
      setSearchResult(response.data);
      setShowSearch(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      setTimeout(() => {
        handleSearch();
      }, 4000);
    }
  }, [searchValue]);

  console.log("user", user);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const [dashboard, setDashboard] = useState(true);
  const [diary, setDiary] = useState(false);
  const [patient, setPatient] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [communication, setCommunication] = useState(false);
  const [tasks, setTasks] = useState(false);
  const [stock, setStock] = useState(false);
  const [reporting, setReporting] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userManagement, setUserManagement] = useState(false);
  const [till, setTill] = useState(false);
  const [gos1, setgos1] = useState(false);
  const [gos3, setgos3] = useState(false);
  const [gos4, setgos4] = useState(false);
  const [gos6, setgos6] = useState(false);

  const [blueCol, setblueCol] = useState("#4C004A"); //Brownish

  const [showLogin, setshowLogin] = useState(false);
  // const [showSignup,setshowSignup] = useState(false);

  const [gosReveal, setgosReveal] = useState(true);

  function activeDashboard() {
    // setshowSignup(false);
    setDoctor(false);
    setDashboard(true);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeDiary() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(true);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activePatient() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(true);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeDoctor() {
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setDoctor(true);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeCommunication() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(true);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeTasks() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(true);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeStock() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(true);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeReporting() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(true);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeAdmin() {
    setDoctor(false);
    // setshowSignup(false);
    setshowLogin(true);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(true);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeSignup() {
    setDoctor(false);
    setAdmin(false);
    // setshowSignup(true);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(true);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeUserManagement() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(true);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeTill() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(true);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeGos1() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(true);
    setgos3(false);
    setgos4(false);
    setgos6(false);
  }
  function activeGos3() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(true);
    setgos4(false);
    setgos6(false);
  }
  function activeGos4() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(true);
    setgos6(false);
  }
  function activeGos6() {
    setDoctor(false);
    // setshowSignup(false);
    setDashboard(false);
    setDiary(false);
    setPatient(false);
    setCommunication(false);
    setTasks(false);
    setStock(false);
    setReporting(false);
    setAdmin(false);
    setUserManagement(false);
    setTill(false);
    setgos1(false);
    setgos3(false);
    setgos4(false);
    setgos6(true);
  }
  const MakeAppoit = () => {
    window.open("Diary.html", "_blank");
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="home_page">
        <div className="home_page_left">
          <div
            className="spectrum_logo_con"
            onClick={() => {
              console.log(isMobile);
            }}
          >
            {isMobile ? (
              <>
                <svg
                  width="74"
                  height="60"
                  viewBox="0 0 74 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.414 28.0316C39.414 30.2183 40.1793 32.0223 41.71 33.4436C43.2407 34.8103 45.5367 36.3683 48.598 38.1176C50.8393 39.3749 52.616 40.4683 53.928 41.3976C55.24 42.3269 56.3607 43.5023 57.29 44.9236C58.2193 46.3449 58.684 47.9849 58.684 49.8436C58.684 53.2329 57.3173 55.9116 54.584 57.8796C51.9053 59.7929 48.2973 60.7496 43.76 60.7496C39.8787 60.7496 36.7353 60.0116 34.33 58.5356C31.9793 57.0596 30.804 55.0643 30.804 52.5496C30.804 50.9096 31.3507 49.6249 32.444 48.6956C33.592 47.7116 35.0133 47.2196 36.708 47.2196C38.02 47.2196 39.2773 47.5476 40.48 48.2036C38.7853 49.0783 37.938 50.8003 37.938 53.3696C37.938 54.9003 38.4847 56.2123 39.578 57.3056C40.726 58.3443 42.2567 58.8636 44.17 58.8636C46.138 58.8636 47.6687 58.3169 48.762 57.2236C49.91 56.1303 50.484 54.7636 50.484 53.1236C50.484 51.2103 49.7733 49.6523 48.352 48.4496C46.9853 47.1923 44.8807 45.7436 42.038 44.1036C39.7967 42.9009 37.938 41.7803 36.462 40.7416C35.0407 39.7029 33.838 38.4183 32.854 36.8876C31.87 35.3569 31.378 33.5529 31.378 31.4756C31.378 28.3596 32.69 25.8449 35.314 23.9316C37.9927 21.9636 41.464 20.9796 45.728 20.9796C49.3907 20.9796 52.37 21.6903 54.666 23.1116C56.962 24.4783 58.11 26.3096 58.11 28.6056C58.11 30.0816 57.618 31.2569 56.634 32.1316C55.65 32.9516 54.3107 33.3616 52.616 33.3616C51.4133 33.3616 50.156 33.0609 48.844 32.4596C49.5547 31.9129 50.1013 31.2296 50.484 30.4096C50.8667 29.5896 51.058 28.7423 51.058 27.8676C51.058 26.5009 50.566 25.3529 49.582 24.4236C48.598 23.4396 47.1493 22.9476 45.236 22.9476C43.3773 22.9476 41.9287 23.4396 40.89 24.4236C39.906 25.4076 39.414 26.6103 39.414 28.0316Z"
                    fill="white"
                  />
                  <path
                    d="M2 58.6993V2H72V77.0883H35.4783"
                    stroke="#00E6F5"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  width="236"
                  height="70px"
                  viewBox="0 0 238 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M97.624 32.757C99.392 32.757 100.813 33.537 101.888 35.097C102.997 36.6223 103.552 38.633 103.552 41.129C103.552 42.897 103.223 44.4917 102.564 45.913C101.94 47.2997 101.039 48.3917 99.86 49.189C98.716 49.9517 97.416 50.333 95.96 50.333C95.128 50.333 94.3307 50.2117 93.568 49.969C92.84 49.6917 92.216 49.3103 91.696 48.825V54.753C91.696 55.585 91.8 56.1397 92.008 56.417C92.2507 56.729 92.788 56.9717 93.62 57.145L94.296 57.301L93.984 58.185H85.924L85.508 57.665L85.924 57.145C86.34 56.5903 86.6173 55.9837 86.756 55.325C86.9293 54.701 87.016 53.8517 87.016 52.777V36.449C87.016 35.825 86.7907 35.513 86.34 35.513H84.728L84.572 34.941C85.2307 34.3517 86.08 33.8663 87.12 33.485C88.1947 33.1037 89.2347 32.913 90.24 32.913C90.6907 32.913 91.0373 33.017 91.28 33.225C91.5573 33.433 91.696 33.7103 91.696 34.057V36.345C92.5627 35.097 93.464 34.1957 94.4 33.641C95.3707 33.0517 96.4453 32.757 97.624 32.757ZM93.984 48.825C95.4053 48.825 96.48 48.2183 97.208 47.005C97.9707 45.7917 98.352 44.0063 98.352 41.649C98.352 39.6037 98.0747 38.0437 97.52 36.969C96.9653 35.8597 96.168 35.305 95.128 35.305C93.7413 35.305 92.5973 36.2237 91.696 38.061V48.149C92.3547 48.5997 93.1173 48.825 93.984 48.825ZM118.238 48.773C119.243 48.773 120.127 48.5997 120.89 48.253C121.652 47.8717 122.398 47.2477 123.126 46.381L123.75 46.849C122.952 47.993 121.93 48.8943 120.682 49.553C119.468 50.177 118.134 50.489 116.678 50.489C115.083 50.489 113.644 50.1077 112.362 49.345C111.114 48.5823 110.126 47.5423 109.398 46.225C108.67 44.873 108.306 43.3477 108.306 41.649C108.306 38.945 109.12 36.7957 110.75 35.201C112.414 33.5717 114.615 32.757 117.354 32.757C119.295 32.757 120.872 33.225 122.086 34.161C123.334 35.0623 123.958 36.241 123.958 37.697C123.958 39.361 123.247 40.6957 121.826 41.701C120.439 42.6717 118.532 43.157 116.106 43.157C115.135 43.157 114.251 43.0877 113.454 42.949C113.627 44.7517 114.147 46.173 115.014 47.213C115.88 48.253 116.955 48.773 118.238 48.773ZM116.782 34.005C115.707 34.005 114.858 34.6637 114.234 35.981C113.644 37.2637 113.35 39.0663 113.35 41.389V42.221C113.731 42.221 114.199 42.1863 114.754 42.117C116.21 41.9437 117.319 41.4757 118.082 40.713C118.879 39.9157 119.278 38.8757 119.278 37.593C119.278 36.553 119.035 35.7037 118.55 35.045C118.099 34.3517 117.51 34.005 116.782 34.005ZM143.911 37.333C143.911 38.477 143.565 39.3783 142.871 40.037C142.178 40.6957 141.329 41.025 140.323 41.025C139.526 41.025 138.798 40.817 138.139 40.401C138.902 39.7077 139.283 38.737 139.283 37.489C139.283 36.4837 139.075 35.669 138.659 35.045C138.243 34.3863 137.637 34.057 136.839 34.057C135.938 34.057 135.193 34.7677 134.603 36.189C134.049 37.5757 133.771 39.3957 133.771 41.649C133.771 43.7983 134.17 45.5317 134.967 46.849C135.799 48.1317 136.961 48.773 138.451 48.773C139.491 48.773 140.375 48.5823 141.103 48.201C141.866 47.8197 142.577 47.265 143.235 46.537L143.859 46.953C143.131 47.993 142.178 48.8423 140.999 49.501C139.821 50.1597 138.451 50.489 136.891 50.489C134.465 50.489 132.471 49.6743 130.911 48.045C129.351 46.4157 128.571 44.3183 128.571 41.753C128.571 39.0143 129.386 36.8303 131.015 35.201C132.645 33.5717 134.811 32.757 137.515 32.757C139.422 32.757 140.965 33.1903 142.143 34.057C143.322 34.889 143.911 35.981 143.911 37.333ZM154.152 50.489C152.731 50.489 151.708 50.177 151.084 49.553C150.46 48.8943 150.148 47.837 150.148 46.381V35.357H147.548C147.548 34.7677 147.583 34.3863 147.652 34.213C147.721 34.0397 147.929 33.901 148.276 33.797C149.42 33.485 150.321 32.9997 150.98 32.341C151.639 31.6823 152.176 30.729 152.592 29.481C152.696 29.0997 152.869 28.8743 153.112 28.805C153.355 28.701 153.944 28.649 154.88 28.649V33.329H159.144C159.144 33.7797 159.075 34.1957 158.936 34.577C158.797 34.9237 158.607 35.1837 158.364 35.357H154.88V47.057C154.88 48.097 155.313 48.617 156.18 48.617C156.561 48.617 156.977 48.4957 157.428 48.253C157.913 48.0103 158.347 47.681 158.728 47.265L159.144 47.785C157.653 49.5877 155.989 50.489 154.152 50.489ZM174.396 32.757C175.505 32.757 176.407 33.0863 177.1 33.745C177.793 34.369 178.14 35.1837 178.14 36.189C178.14 37.125 177.863 37.8877 177.308 38.477C176.753 39.0317 176.025 39.309 175.124 39.309C174.431 39.309 173.789 39.1703 173.2 38.893C173.824 38.373 174.136 37.593 174.136 36.553C174.136 36.0677 174.032 35.6863 173.824 35.409C173.616 35.1317 173.339 34.993 172.992 34.993C172.16 34.993 171.467 35.8423 170.912 37.541C170.357 39.205 170.08 41.285 170.08 43.781C170.08 45.0637 170.149 46.0863 170.288 46.849C170.461 47.6117 170.739 48.3223 171.12 48.981L171.536 49.501L171.12 50.021H163.58L163.268 49.137L163.996 48.981C164.551 48.8423 164.915 48.6343 165.088 48.357C165.261 48.045 165.348 47.4557 165.348 46.589V36.449C165.348 35.7903 165.123 35.461 164.672 35.461H163.06L162.852 34.889C163.511 34.2997 164.325 33.8143 165.296 33.433C166.301 33.0517 167.289 32.861 168.26 32.861C168.711 32.861 169.075 32.965 169.352 33.173C169.629 33.381 169.768 33.6583 169.768 34.005V37.801H169.924C170.652 34.4383 172.143 32.757 174.396 32.757ZM194.644 45.289C194.158 46.8143 193.309 48.0623 192.096 49.033C190.917 50.0037 189.652 50.489 188.3 50.489C186.774 50.489 185.648 50.0037 184.92 49.033C184.192 48.0623 183.828 46.5717 183.828 44.561V36.085C183.828 35.5997 183.602 35.357 183.152 35.357H181.54L181.384 34.785C182.077 34.1957 182.944 33.7103 183.984 33.329C185.024 32.9477 186.046 32.757 187.052 32.757C187.502 32.757 187.849 32.861 188.092 33.069C188.369 33.277 188.508 33.5543 188.508 33.901V44.301C188.508 45.4797 188.681 46.3983 189.028 47.057C189.374 47.681 189.86 47.993 190.484 47.993C191.766 47.993 192.789 47.213 193.552 45.653C194.349 44.0583 194.748 41.9957 194.748 39.465C194.748 38.113 194.644 37.073 194.436 36.345C194.262 35.5823 193.933 34.9237 193.448 34.369L192.98 33.797L193.396 33.329L199.376 32.861V47.057C199.376 48.097 199.688 48.617 200.312 48.617C200.97 48.617 201.612 48.357 202.236 47.837L202.652 48.357C201.438 49.7783 199.93 50.489 198.128 50.489C196.81 50.489 195.892 50.1077 195.372 49.345C194.886 48.5823 194.644 47.2303 194.644 45.289ZM223.905 38.477C223.87 36.501 223.523 35.0623 222.865 34.161C222.206 33.225 221.166 32.757 219.745 32.757C218.393 32.757 217.179 33.3117 216.105 34.421C215.03 35.5303 214.267 36.8823 213.817 38.477V34.213C213.817 33.8663 213.678 33.6063 213.401 33.433C213.158 33.225 212.811 33.121 212.361 33.121C211.321 33.121 210.281 33.3117 209.241 33.693C208.201 34.0743 207.334 34.5597 206.641 35.149L206.797 35.669H208.461C208.911 35.669 209.137 35.929 209.137 36.449V46.589C209.137 47.4557 209.05 48.045 208.877 48.357C208.703 48.6343 208.339 48.8423 207.785 48.981L207.057 49.137L207.369 50.021H214.909L215.325 49.501L214.909 48.981C214.493 48.3917 214.198 47.785 214.025 47.161C213.886 46.537 213.817 45.6877 213.817 44.613C213.817 42.1863 214.129 40.0543 214.753 38.217C215.377 36.345 216.243 35.409 217.353 35.409C218.67 35.409 219.329 36.4143 219.329 38.425V50.021H225.101L225.517 49.501L225.101 48.981C224.719 48.3917 224.442 47.785 224.269 47.161C224.13 46.537 224.043 45.6877 224.009 44.613C224.009 42.1863 224.321 40.0543 224.945 38.217C225.569 36.345 226.435 35.409 227.545 35.409C228.862 35.409 229.521 36.4143 229.521 38.425V45.913C229.521 47.6117 229.781 48.8077 230.301 49.501C230.821 50.1597 231.722 50.489 233.005 50.489C234.738 50.489 236.246 49.7783 237.529 48.357L237.113 47.837C236.489 48.357 235.847 48.617 235.189 48.617C234.53 48.617 234.201 48.097 234.201 47.057V38.841C234.201 36.761 233.854 35.2357 233.161 34.265C232.502 33.2597 231.427 32.757 229.937 32.757C228.689 32.757 227.51 33.2943 226.401 34.369C225.291 35.4437 224.494 36.813 224.009 38.477H223.905Z"
                    fill="white"
                  />
                  <path
                    d="M39.414 28.0317C39.414 30.2184 40.1793 32.0224 41.71 33.4437C43.2407 34.8104 45.5367 36.3684 48.598 38.1177C50.8393 39.3751 52.616 40.4684 53.928 41.3977C55.24 42.3271 56.3607 43.5024 57.29 44.9237C58.2193 46.3451 58.684 47.9851 58.684 49.8437C58.684 53.2331 57.3173 55.9117 54.584 57.8797C51.9053 59.7931 48.2973 60.7497 43.76 60.7497C39.8787 60.7497 36.7353 60.0117 34.33 58.5357C31.9793 57.0597 30.804 55.0644 30.804 52.5497C30.804 50.9097 31.3507 49.6251 32.444 48.6957C33.592 47.7117 35.0133 47.2197 36.708 47.2197C38.02 47.2197 39.2773 47.5477 40.48 48.2037C38.7853 49.0784 37.938 50.8004 37.938 53.3697C37.938 54.9004 38.4847 56.2124 39.578 57.3057C40.726 58.3444 42.2567 58.8637 44.17 58.8637C46.138 58.8637 47.6687 58.3171 48.762 57.2237C49.91 56.1304 50.484 54.7637 50.484 53.1237C50.484 51.2104 49.7733 49.6524 48.352 48.4497C46.9853 47.1924 44.8807 45.7437 42.038 44.1037C39.7967 42.9011 37.938 41.7804 36.462 40.7417C35.0407 39.7031 33.838 38.4184 32.854 36.8877C31.87 35.3571 31.378 33.5531 31.378 31.4757C31.378 28.3597 32.69 25.845 35.314 23.9317C37.9927 21.9637 41.464 20.9797 45.728 20.9797C49.3907 20.9797 52.37 21.6904 54.666 23.1117C56.962 24.4784 58.11 26.3097 58.11 28.6057C58.11 30.0817 57.618 31.2571 56.634 32.1317C55.65 32.9517 54.3107 33.3617 52.616 33.3617C51.4133 33.3617 50.156 33.0611 48.844 32.4597C49.5547 31.9131 50.1013 31.2297 50.484 30.4097C50.8667 29.5897 51.058 28.7424 51.058 27.8677C51.058 26.5011 50.566 25.3531 49.582 24.4237C48.598 23.4397 47.1493 22.9477 45.236 22.9477C43.3773 22.9477 41.9287 23.4397 40.89 24.4237C39.906 25.4077 39.414 26.6104 39.414 28.0317Z"
                    fill="white"
                  />
                  <path
                    d="M2 58.6993V2H72V77.0883H35.4783"
                    stroke="#00E6F5"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </>
            )}
          </div>
          {user.username && (
            <ul className="sidebar_list_elem">
              {/* <NavLink className="sidebar_list_con" to="/">
                <li
                  onClick={activeDashboard}
                  style={{ background: dashboard ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 27 28"
                    fill={dashboard ? blueCol : "white"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M26.4858 14.6766C26.1431 15.0194 25.73 15.1908 25.2466 15.1908C24.7632 15.1908 24.3545 15.0238 24.0205 14.6897L23.625 14.2942V25.3442C23.625 25.8014 23.4624 26.1969 23.1372 26.531C22.812 26.865 22.4121 27.0321 21.9375 27.0321H16.875V19.4368C16.875 19.2082 16.7915 19.0104 16.6245 18.8434C16.4575 18.6764 16.2598 18.5929 16.0312 18.5929H10.9688C10.7402 18.5929 10.5425 18.6764 10.3755 18.8434C10.2085 19.0104 10.125 19.2082 10.125 19.4368V27.0321H5.0625C4.58789 27.0321 4.18799 26.865 3.86279 26.531C3.5376 26.1969 3.375 25.8014 3.375 25.3442V14.2942L2.97949 14.6897C2.64551 15.0238 2.23682 15.1908 1.75342 15.1908C1.27002 15.1908 0.856934 15.0194 0.51416 14.6766C0.171387 14.3337 0 13.9206 0 13.4371C0 12.9536 0.166992 12.5448 0.500977 12.2107L12.208 0.501356C12.5596 0.149723 12.9902 -0.0173024 13.5 0.00027927C14.0098 -0.0173024 14.4404 0.149723 14.792 0.501356L26.499 12.2107C26.833 12.5448 27 12.9536 27 13.4371C27 13.9206 26.8286 14.3337 26.4858 14.6766Z" />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: dashboard ? blueCol : "#FFFFFF" }}
                  >
                    Dashboard
                  </div>
                </li>
              </NavLink> */}
              <NavLink className="sidebar_list_con" onClick={MakeAppoit}>
                <li
                  onClick={activeDiary}
                  style={{ background: diary ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 25 27"
                    fill={diary ? blueCol : "white"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.7655 21.2774H24.125V3.1728C24.125 2.48685 23.8528 1.829 23.3684 1.34396C22.8839 0.858918 22.2268 0.586426 21.5417 0.586426H4.75C3.19225 0.586426 0.875 1.61968 0.875 4.46599V22.5706C0.875 25.4169 3.19225 26.4502 4.75 26.4502H24.125V23.8638H4.7655C4.16875 23.8483 3.45833 23.6116 3.45833 22.5706C3.45833 21.5296 4.16875 21.2929 4.7655 21.2774V21.2774ZM7.33333 5.75918H18.9583V8.34555H7.33333V5.75918Z" />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: diary ? blueCol : "#FFFFFF" }}
                  >
                    Diary
                  </div>
                </li>
              </NavLink>
              <NavLink className="sidebar_list_con" to="/patient">
                <li
                  onClick={activePatient}
                  style={{ background: patient ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 11.8679C14.5376 11.8679 17 9.4026 17 6.36146C17 3.32031 14.5376 0.85498 11.5 0.85498C8.46243 0.85498 6 3.32031 6 6.36146C6 9.4026 8.46243 11.8679 11.5 11.8679Z"
                      fill={patient ? blueCol : "white"}
                    />
                    <path
                      d="M22.5 24.2576V18.7511C22.5 17.9251 22.0875 17.0992 21.4 16.5485C19.8875 15.3096 17.9625 14.4836 16.0375 13.9329C14.6625 13.52 13.15 13.2446 11.5 13.2446C9.9875 13.2446 8.475 13.52 6.9625 13.9329C5.0375 14.4836 3.1125 15.4472 1.6 16.5485C0.9125 17.0992 0.5 17.9251 0.5 18.7511V24.2576H22.5Z"
                      fill={patient ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: patient ? blueCol : "#FFFFFF" }}
                  >
                    Patient
                  </div>
                </li>
              </NavLink>
              {/* <NavLink className="sidebar_list_con" to="/doctor">
                <li
                  onClick={activeDoctor}
                  style={{ background: doctor ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 11.8679C14.5376 11.8679 17 9.4026 17 6.36146C17 3.32031 14.5376 0.85498 11.5 0.85498C8.46243 0.85498 6 3.32031 6 6.36146C6 9.4026 8.46243 11.8679 11.5 11.8679Z"
                      fill={doctor ? blueCol : "white"}
                    />
                    <path
                      d="M22.5 24.2576V18.7511C22.5 17.9251 22.0875 17.0992 21.4 16.5485C19.8875 15.3096 17.9625 14.4836 16.0375 13.9329C14.6625 13.52 13.15 13.2446 11.5 13.2446C9.9875 13.2446 8.475 13.52 6.9625 13.9329C5.0375 14.4836 3.1125 15.4472 1.6 16.5485C0.9125 17.0992 0.5 17.9251 0.5 18.7511V24.2576H22.5Z"
                      fill={doctor ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: doctor ? blueCol : "#FFFFFF" }}
                  >
                    Doctor
                  </div>
                </li>
              </NavLink> */}
              {/* <NavLink className="sidebar_list_con" to="/communication">
                <li
                  onClick={activeCommunication}
                  style={{ background: communication ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 23 28"
                    fill={communication ? blueCol : "white"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.9597 13.6004C20.9597 14.0169 20.6423 14.3489 20.265 14.3489C20.2351 14.3489 20.2111 14.3308 20.1812 14.3248C19.5882 13.4374 18.642 12.8519 17.5579 12.8519C15.7612 12.8519 14.3119 14.4395 14.3119 16.4074V23.4823C14.3119 25.4442 15.7552 27.0318 17.552 27.0318H17.7137C17.9293 27.0318 18.1269 26.9835 18.3126 26.899V26.905C18.4982 26.8205 18.6839 26.73 18.8636 26.6334C19.4804 26.2893 20.0494 25.8365 20.5525 25.2872C21.4269 24.3334 21.9839 23.1442 22.2773 21.8645C22.2893 21.8102 22.3073 21.7498 22.3193 21.6955C22.9361 18.9186 23.1038 15.5019 22.9421 12.4474C22.7505 8.84358 21.6245 5.89774 19.6062 3.67628C19.6062 3.67024 19.6002 3.67024 19.5942 3.6642C19.1331 3.15713 18.642 2.70439 18.1209 2.29994C17.5819 1.87738 17.0129 1.50914 16.42 1.20732C14.9048 0.416524 13.2338 0 11.509 0C9.77215 0 8.11318 0.416524 6.59794 1.20732C6.00502 1.51518 5.43606 1.88341 4.89705 2.29994C4.376 2.70439 3.8789 3.15713 3.41774 3.6642C3.41176 3.67024 3.41176 3.67024 3.40577 3.67628C1.36948 5.88566 0.249525 8.83151 0.0578745 12.4353C-0.103831 15.4959 0.0638636 18.9066 0.680738 21.6834C0.692716 21.7377 0.704694 21.7981 0.722662 21.8524C1.01613 23.1322 1.57311 24.3214 2.44752 25.2751C2.9506 25.8245 3.51956 26.2772 4.13643 26.6213C4.31611 26.7239 4.49578 26.8145 4.68743 26.8929V26.8869C4.87309 26.9714 5.07672 27.0197 5.28634 27.0197H5.44804C7.24476 27.0197 8.68813 25.4261 8.68813 23.4702V16.4074C8.68813 14.4455 7.23877 12.8519 5.44205 12.8519C4.36402 12.8519 3.41176 13.4374 2.82483 14.3248C2.79488 14.3248 2.76494 14.3489 2.73499 14.3489C2.35768 14.3489 2.04026 14.0169 2.04026 13.6004C2.04026 13.5823 2.05823 13.5702 2.05823 13.5582C2.0702 13.2322 2.08817 12.9002 2.10614 12.5742C2.15405 11.6144 2.2918 10.7089 2.49543 9.86377C2.86675 8.30633 3.50159 6.95414 4.38797 5.81926C4.5377 5.62005 4.69941 5.43292 4.8671 5.24578C5.05875 5.04054 5.2504 4.84133 5.45403 4.66024C5.54986 4.56969 5.64568 4.49121 5.7415 4.4067C6.4003 3.8453 7.11899 3.38048 7.87961 3.03036C9.01753 2.51122 10.2453 2.2275 11.515 2.2275C12.7847 2.2275 14.0124 2.50518 15.1503 3.03036C15.911 3.38048 16.6296 3.8453 17.2884 4.4067C17.3843 4.49121 17.4801 4.57573 17.5699 4.66024C17.7736 4.84133 17.9652 5.04054 18.1569 5.24578C18.3246 5.43292 18.4863 5.62005 18.636 5.81926C19.5224 6.95414 20.1512 8.30633 20.5225 9.86377C20.7262 10.7089 20.8699 11.6083 20.9178 12.5742C20.9358 12.9002 20.9118 13.2322 20.9717 13.5582C20.9597 13.5642 20.9597 13.5763 20.9597 13.6004C20.9597 13.5944 20.9597 13.5944 20.9597 13.6004Z" />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: communication ? blueCol : "#FFFFFF" }}
                  >
                    Communication
                  </div>
                </li>
              </NavLink> */}
              <NavLink className="sidebar_list_con" to="/tasks">
                <li
                  onClick={activeTasks}
                  style={{ background: tasks ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17647 0C7.06234 0 6.11452 0.688292 5.76324 1.649H3.05882C1.64562 1.649 0.5 2.75642 0.5 4.1225V23.9105C0.5 25.2765 1.64562 26.384 3.05882 26.384H14.5858C13.246 24.8159 12.4412 22.805 12.4412 20.6125C12.4412 15.8815 16.1885 11.9965 20.9706 11.58V4.1225C20.9706 2.75642 19.8249 1.649 18.4118 1.649H15.7073C15.356 0.688292 14.4082 0 13.2941 0H8.17647ZM7.32353 2.4735C7.32353 2.01814 7.70541 1.649 8.17647 1.649H13.2941C13.7652 1.649 14.1471 2.01814 14.1471 2.4735C14.1471 2.92885 13.7652 3.298 13.2941 3.298H8.17647C7.70541 3.298 7.32353 2.92885 7.32353 2.4735ZM15.6032 12.9505L9.63253 18.7221C9.29944 19.0439 8.75939 19.0439 8.4263 18.7221L5.86747 16.2486C5.53437 15.9265 5.53437 15.4044 5.86747 15.0824C6.20056 14.7605 6.74061 14.7605 7.0737 15.0824L9.02941 16.973L14.3968 11.7845C14.73 11.4625 15.27 11.4625 15.6032 11.7845C15.9362 12.1065 15.9362 12.6285 15.6032 12.9505ZM29.5 20.6125C29.5 24.7107 26.0632 28.033 21.8235 28.033C17.5839 28.033 14.1471 24.7107 14.1471 20.6125C14.1471 16.5142 17.5839 13.192 21.8235 13.192C26.0632 13.192 29.5 16.5142 29.5 20.6125ZM22.6765 17.3145C22.6765 16.8592 22.2945 16.49 21.8235 16.49C21.3525 16.49 20.9706 16.8592 20.9706 17.3145V19.788H18.4118C17.9408 19.788 17.5588 20.1572 17.5588 20.6125C17.5588 21.0678 17.9408 21.437 18.4118 21.437H20.9706V23.9105C20.9706 24.3658 21.3525 24.735 21.8235 24.735C22.2945 24.735 22.6765 24.3658 22.6765 23.9105V21.437H25.2353C25.7063 21.437 26.0882 21.0678 26.0882 20.6125C26.0882 20.1572 25.7063 19.788 25.2353 19.788H22.6765V17.3145Z"
                      fill={tasks ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: tasks ? blueCol : "#FFFFFF" }}
                  >
                    Tasks
                  </div>
                </li>
              </NavLink>
              {/* <NavLink className="sidebar_list_con" to="/stock">
                <li
                  onClick={activeStock}
                  style={{ background: stock ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 21.0247H7.6C7.3 21.0247 7 20.7244 7 20.424C7 20.1237 7.2 19.8233 7.5 19.8233L25.2 17.02C25.6 16.9199 26 16.6195 26 16.2191L28 5.20612C28.1 4.70553 27.7 4.10483 27.2 4.00471C26.7 3.90459 26.1 4.30506 26 4.80565L25.8 6.00706H6.6V5.90695C7.2 4.60542 7.2 3.10365 6.4 1.90224C5.7 0.700824 4.4 0 3 0H1C0.4 0 0 0.400471 0 1.00118C0 1.60188 0.4 2.00235 1 2.00235H3C3.7 2.00235 4.4 2.40283 4.8 3.00353C5.2 3.60424 5.2 4.40518 4.9 5.00589L4.1 6.60777C4.1 6.70789 4.1 6.70789 4 6.80801C4 6.80801 4 6.90812 4 7.00824C4 7.10836 4 7.10836 4 7.20848C4 7.3086 4 7.30859 4 7.40871L7.8 17.7208L7.2 17.821C5.9 18.0212 5 19.1225 5 20.424C5 21.4252 5.5 22.2261 6.3 22.7267C6.1 23.1272 6 23.5277 6 24.0283C6 25.7303 7.3 27.0318 9 27.0318C10.7 27.0318 12 25.7303 12 24.0283C12 23.6278 11.9 23.3274 11.8 23.0271H19.2C19.1 23.3274 19 23.6278 19 24.0283C19 25.7303 20.3 27.0318 22 27.0318C23.7 27.0318 25 25.7303 25 24.0283C25 23.6278 24.9 23.3274 24.8 23.0271H25C25.6 23.0271 26 22.6266 26 22.0259C26 21.4252 25.6 21.0247 25 21.0247ZM10 24.0283C10 24.629 9.6 25.0294 9 25.0294C8.4 25.0294 8 24.629 8 24.0283C8 23.4276 8.4 23.0271 9 23.0271C9.6 23.0271 10 23.4276 10 24.0283ZM23 24.0283C23 24.629 22.6 25.0294 22 25.0294C21.4 25.0294 21 24.629 21 24.0283C21 23.4276 21.4 23.0271 22 23.0271C22.6 23.0271 23 23.4276 23 24.0283Z"
                      fill={stock ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: stock ? blueCol : "#FFFFFF" }}
                  >
                    Stock
                  </div>
                </li>
              </NavLink>
              <NavLink className="sidebar_list_con" to="/reporting">
                <li
                  onClick={activeReporting}
                  style={{ background: reporting ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.2913 1.14111H2.70801C1.81055 1.14111 1.08301 1.86865 1.08301 2.76611V17.9328C1.08301 18.8302 1.81055 19.5578 2.70801 19.5578H23.2913C24.1888 19.5578 24.9163 18.8302 24.9163 17.9328V2.76611C24.9163 1.86865 24.1888 1.14111 23.2913 1.14111Z"
                      fill={reporting ? blueCol : "white"}
                    />
                    <path
                      d="M3.7915 13.0581H5.95817V15.2248H3.7915V13.0581Z"
                      fill="#D2D2D2"
                    />
                    <path
                      d="M5.95801 10.8911H8.12467V15.2244H5.95801V10.8911Z"
                      fill={reporting ? blueCol : "white"}
                    />
                    <path
                      d="M10.833 10.8911H12.9997V15.2244H10.833V10.8911Z"
                      fill="#D2D2D2"
                    />
                    <path
                      d="M13 8.72461H15.1667V15.2246H13V8.72461Z"
                      fill={reporting ? blueCol : "white"}
                    />
                    <path
                      d="M17.875 5.47461H20.0417V15.2246H17.875V5.47461Z"
                      fill="#D2D2D2"
                    />
                    <path
                      d="M20.0415 3.30811H22.2082V15.2248H20.0415V3.30811Z"
                      fill={reporting ? blueCol : "white"}
                    />
                    <path
                      d="M4.33312 9.80802C4.23387 9.80756 4.13666 9.77985 4.0521 9.7279C3.96754 9.67596 3.89887 9.60178 3.8536 9.51347C3.80832 9.42515 3.78818 9.3261 3.79537 9.22712C3.80256 9.12813 3.8368 9.03303 3.89437 8.95219L6.6027 5.16052C6.68046 5.05103 6.79612 4.97434 6.92724 4.94531C7.05835 4.91629 7.19558 4.937 7.31228 5.00344L10.6327 6.90469L12.5285 3.57885C12.6004 3.45387 12.7189 3.36254 12.8581 3.32495C12.9972 3.28737 13.1456 3.30661 13.2706 3.37844C13.3956 3.45027 13.4869 3.5688 13.5245 3.70797C13.5621 3.84714 13.5429 3.99554 13.471 4.12052L11.3044 7.91219C11.269 7.97425 11.2217 8.02871 11.1651 8.07241C11.1086 8.11612 11.044 8.14821 10.975 8.16683C10.9061 8.18546 10.8341 8.19026 10.7632 8.18095C10.6924 8.17165 10.6241 8.14842 10.5623 8.1126L7.19853 6.18969L4.77187 9.58052C4.72202 9.65052 4.65624 9.70767 4.57995 9.74723C4.50366 9.78678 4.41905 9.80762 4.33312 9.80802Z"
                      fill="#C2C0DB"
                    />
                    <path
                      d="M12.9998 4.93278C13.5981 4.93278 14.0832 4.44776 14.0832 3.84945C14.0832 3.25114 13.5981 2.76611 12.9998 2.76611C12.4015 2.76611 11.9165 3.25114 11.9165 3.84945C11.9165 4.44776 12.4015 4.93278 12.9998 4.93278Z"
                      fill="#C2C0DB"
                    />
                    <path
                      d="M10.8333 8.72477C11.4316 8.72477 11.9167 8.23975 11.9167 7.64144C11.9167 7.04313 11.4316 6.55811 10.8333 6.55811C10.235 6.55811 9.75 7.04313 9.75 7.64144C9.75 8.23975 10.235 8.72477 10.8333 8.72477Z"
                      fill="#C2C0DB"
                    />
                    <path
                      d="M7.04134 6.55778C7.63965 6.55778 8.12467 6.07276 8.12467 5.47445C8.12467 4.87614 7.63965 4.39111 7.04134 4.39111C6.44303 4.39111 5.95801 4.87614 5.95801 5.47445C5.95801 6.07276 6.44303 6.55778 7.04134 6.55778Z"
                      fill="#C2C0DB"
                    />
                    <path
                      d="M4.33333 10.3498C4.93164 10.3498 5.41667 9.86475 5.41667 9.26644C5.41667 8.66813 4.93164 8.18311 4.33333 8.18311C3.73502 8.18311 3.25 8.66813 3.25 9.26644C3.25 9.86475 3.73502 10.3498 4.33333 10.3498Z"
                      fill="#C2C0DB"
                    />
                    <path
                      d="M24.9163 15.2246V17.9329C24.9163 18.3639 24.7451 18.7772 24.4404 19.082C24.1356 19.3867 23.7223 19.5579 23.2913 19.5579H2.70801C2.27703 19.5579 1.86371 19.3867 1.55896 19.082C1.25421 18.7772 1.08301 18.3639 1.08301 17.9329V15.2246H24.9163Z"
                      fill="#D2D2D2"
                    />
                    <path
                      d="M17.875 23.8913C7.25836 23.8913 8.17919 23.8534 8.12502 23.8913C8.62479 23.5574 9.03453 23.1054 9.31796 22.5753C9.6014 22.0453 9.7498 21.4536 9.75002 20.8525V19.5579H16.25V20.8525C16.2493 21.4538 16.3973 22.0458 16.6808 22.576C16.9643 23.1062 17.3746 23.5581 17.875 23.8913ZM13.5417 17.9329H12.4584C12.3147 17.9329 12.1769 17.8759 12.0753 17.7743C11.9738 17.6727 11.9167 17.5349 11.9167 17.3913C11.9167 17.2476 11.9738 17.1098 12.0753 17.0083C12.1769 16.9067 12.3147 16.8496 12.4584 16.8496H13.5417C13.6853 16.8496 13.8231 16.9067 13.9247 17.0083C14.0263 17.1098 14.0834 17.2476 14.0834 17.3913C14.0834 17.5349 14.0263 17.6727 13.9247 17.7743C13.8231 17.8759 13.6853 17.9329 13.5417 17.9329Z"
                      fill="white"
                    />
                    <path
                      d="M23.2915 0.599609H2.70817C2.13353 0.599609 1.58243 0.827883 1.17611 1.23421C0.769777 1.64054 0.541504 2.19164 0.541504 2.76628V17.9329C0.541504 18.5076 0.769777 19.0587 1.17611 19.465C1.58243 19.8713 2.13353 20.0996 2.70817 20.0996H9.20817V20.8525C9.20798 21.3385 9.09368 21.8176 8.87446 22.2513C8.65525 22.6851 8.33726 23.0612 7.94609 23.3496H7.0415C6.89785 23.3496 6.76007 23.4067 6.65849 23.5083C6.55691 23.6098 6.49984 23.7476 6.49984 23.8913C6.49984 24.0349 6.55691 24.1727 6.65849 24.2743C6.76007 24.3759 6.89785 24.4329 7.0415 24.4329H18.9582C19.1018 24.4329 19.2396 24.3759 19.3412 24.2743C19.4428 24.1727 19.4998 24.0349 19.4998 23.8913C19.4998 23.7476 19.4428 23.6098 19.3412 23.5083C19.2396 23.4067 19.1018 23.3496 18.9582 23.3496H18.0536C17.6624 23.0612 17.3444 22.6851 17.1252 22.2513C16.906 21.8176 16.7917 21.3385 16.7915 20.8525V20.0996H23.2915C23.8661 20.0996 24.4172 19.8713 24.8236 19.465C25.2299 19.0587 25.4582 18.5076 25.4582 17.9329V2.76628C25.4582 2.19164 25.2299 1.64054 24.8236 1.23421C24.4172 0.827883 23.8661 0.599609 23.2915 0.599609ZM2.70817 1.68294H23.2915C23.5788 1.68294 23.8544 1.79708 24.0575 2.00024C24.2607 2.20341 24.3748 2.47896 24.3748 2.76628V14.6829H22.7498V3.30794C22.7498 3.16428 22.6928 3.02651 22.5912 2.92493C22.4896 2.82334 22.3518 2.76628 22.2082 2.76628H20.0415C19.8978 2.76628 19.7601 2.82334 19.6585 2.92493C19.5569 3.02651 19.4998 3.16428 19.4998 3.30794V4.93294H17.8748C17.7312 4.93294 17.5934 4.99001 17.4918 5.09159C17.3902 5.19318 17.3332 5.33095 17.3332 5.47461V14.6829H15.7082V8.72461C15.7082 8.58095 15.6511 8.44317 15.5495 8.34159C15.4479 8.24001 15.3102 8.18294 15.1665 8.18294H12.9998C12.8562 8.18294 12.7184 8.24001 12.6168 8.34159C12.5152 8.44317 12.4582 8.58095 12.4582 8.72461V10.3496H10.8332C10.6895 10.3496 10.5517 10.4067 10.4502 10.5083C10.3486 10.6098 10.2915 10.7476 10.2915 10.8913V14.6829H8.6665V10.8913C8.6665 10.7476 8.60944 10.6098 8.50785 10.5083C8.40627 10.4067 8.2685 10.3496 8.12484 10.3496H5.95817C5.81451 10.3496 5.67674 10.4067 5.57515 10.5083C5.47357 10.6098 5.4165 10.7476 5.4165 10.8913V12.5163H3.7915C3.64785 12.5163 3.51007 12.5733 3.40849 12.6749C3.30691 12.7765 3.24984 12.9143 3.24984 13.0579V14.6829H1.62484V2.76628C1.62484 2.47896 1.73897 2.20341 1.94214 2.00024C2.1453 1.79708 2.42085 1.68294 2.70817 1.68294ZM18.4165 14.6829V6.01628H19.4998V14.6829H18.4165ZM20.5832 3.84961H21.6665V14.6829H20.5832V3.84961ZM11.3748 14.6829V11.4329H12.4582V14.6829H11.3748ZM13.5415 9.26628H14.6248V14.6829H13.5415V9.26628ZM4.33317 14.6829V13.5996H5.4165V14.6829H4.33317ZM6.49984 11.4329H7.58317V14.6829H6.49984V11.4329ZM16.5315 23.3496H9.48984C10.3511 22.1579 10.2915 21.1017 10.2915 20.0996H15.7082C15.7082 21.0529 15.6323 22.1363 16.5315 23.3496ZM23.2915 19.0163H2.70817C2.42085 19.0163 2.1453 18.9021 1.94214 18.699C1.73897 18.4958 1.62484 18.2203 1.62484 17.9329V15.7663H24.3748V17.9329C24.3748 18.2203 24.2607 18.4958 24.0575 18.699C23.8544 18.9021 23.5788 19.0163 23.2915 19.0163Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M22.2082 17.9329C22.5073 17.9329 22.7498 17.6904 22.7498 17.3913C22.7498 17.0921 22.5073 16.8496 22.2082 16.8496C21.909 16.8496 21.6665 17.0921 21.6665 17.3913C21.6665 17.6904 21.909 17.9329 22.2082 17.9329Z"
                      fill={reporting ? blueCol : "white"}
                    />
                    <path
                      d="M20.0417 17.9329C20.3408 17.9329 20.5833 17.6904 20.5833 17.3913C20.5833 17.0921 20.3408 16.8496 20.0417 16.8496C19.7425 16.8496 19.5 17.0921 19.5 17.3913C19.5 17.6904 19.7425 17.9329 20.0417 17.9329Z"
                      fill={reporting ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: reporting ? blueCol : "#FFFFFF" }}
                  >
                    Reporting
                  </div>
                </li>
              </NavLink>
              <NavLink className="sidebar_list_con" to="/admin">
                <li
                  onClick={activeAdmin}
                  style={{ background: admin ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 33 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4473 13.1238C16.4848 13.1238 18.9473 10.6585 18.9473 7.61732C18.9473 4.57617 16.4848 2.11084 13.4473 2.11084C10.4097 2.11084 7.94727 4.57617 7.94727 7.61732C7.94727 10.6585 10.4097 13.1238 13.4473 13.1238Z"
                      fill={admin ? blueCol : "white"}
                    />
                    <path
                      d="M15.0702 29.2029C14.7672 28.9029 14.5696 28.5127 14.5068 28.0908C14.444 27.6689 14.5194 27.238 14.7218 26.8626L15.2077 25.9449L14.2085 25.642C13.801 25.5143 13.4463 25.2571 13.1982 24.9092C12.95 24.5614 12.822 24.142 12.8335 23.7147V21.8334C12.8327 21.408 12.9687 20.9936 13.2212 20.6515C13.4738 20.3094 13.8296 20.0577 14.236 19.9336L15.2352 19.6308L14.7585 18.713C14.562 18.3428 14.4873 17.9199 14.5449 17.5047C14.6025 17.0894 14.7895 16.7029 15.0793 16.4003C14.3741 16.3078 13.6639 16.2587 12.9527 16.2535C10.852 16.204 8.76622 16.6192 6.84422 17.4695C4.92221 18.3198 3.21129 19.5842 1.8335 21.1726V28.2851C1.8335 28.5285 1.93007 28.762 2.10198 28.9341C2.27389 29.1062 2.50705 29.2029 2.75016 29.2029H15.0702V29.2029Z"
                      fill={admin ? blueCol : "white"}
                    />
                    <path
                      d="M30.8916 21.5301L29.0582 20.9795C28.9312 20.5262 28.7528 20.089 28.5266 19.6763L29.4432 17.9693C29.4787 17.9059 29.4916 17.8324 29.48 17.7607C29.4683 17.6891 29.4327 17.6235 29.3791 17.5746L28.0499 16.2347C27.9987 16.1849 27.9334 16.1519 27.8629 16.1404C27.7924 16.129 27.7201 16.1394 27.6557 16.1705L25.9599 17.0882C25.5425 16.8612 25.1033 16.6767 24.6491 16.5376L24.0899 14.7021C24.0653 14.6344 24.0204 14.576 23.9613 14.535C23.9022 14.4939 23.8318 14.4721 23.7599 14.4727H21.8532C21.7818 14.4747 21.7126 14.4986 21.6552 14.5413C21.5978 14.584 21.555 14.6433 21.5324 14.7113L20.9824 16.5468C20.5194 16.6817 20.0734 16.8695 19.6532 17.1066L17.9941 16.1889C17.9296 16.1545 17.8559 16.1414 17.7835 16.1513C17.7112 16.1611 17.6437 16.1936 17.5907 16.2439L16.2432 17.5655C16.1902 17.6167 16.1552 17.6838 16.1436 17.7566C16.1321 17.8295 16.1445 17.9041 16.1791 17.9693L17.0957 19.6396C16.8502 20.0541 16.6504 20.4942 16.4999 20.952L14.6666 21.5118C14.5972 21.5318 14.5364 21.5741 14.4933 21.6322C14.4503 21.6902 14.4274 21.7607 14.4282 21.833V23.7144C14.4274 23.7866 14.4503 23.8572 14.4933 23.9152C14.5364 23.9732 14.5972 24.0155 14.6666 24.0356L16.4999 24.5954C16.6373 25.0449 16.8217 25.4786 17.0499 25.8894L16.1332 27.6331C16.0987 27.6983 16.0862 27.7729 16.0978 27.8458C16.1094 27.9187 16.1444 27.9858 16.1974 28.0369L17.5632 29.3677C17.6162 29.418 17.6837 29.4505 17.756 29.4603C17.8284 29.4702 17.9021 29.4571 17.9666 29.4227L19.6807 28.505C20.0887 28.7247 20.5189 28.9 20.9641 29.0281L21.5141 30.9095C21.5371 30.9789 21.5814 31.0393 21.6406 31.0821C21.6999 31.1249 21.771 31.148 21.8441 31.1481H23.7232C23.7947 31.1461 23.8638 31.1221 23.9212 31.0795C23.9786 31.0368 24.0215 30.9774 24.0441 30.9095L24.5941 29.0281C25.0339 28.9016 25.4583 28.7262 25.8591 28.505L27.5916 29.4227C27.6561 29.4571 27.7297 29.4702 27.8021 29.4603C27.8745 29.4505 27.9419 29.418 27.9949 29.3677L29.3332 28.0369C29.3835 27.9839 29.4159 27.9164 29.4258 27.8439C29.4357 27.7715 29.4225 27.6977 29.3882 27.6331L28.4716 25.9078C28.6909 25.5057 28.866 25.0811 28.9941 24.6413L30.8274 24.0815C30.8963 24.0593 30.9568 24.0167 31.001 23.9594C31.0452 23.902 31.071 23.8326 31.0749 23.7603V21.8605C31.0772 21.794 31.0613 21.7281 31.029 21.6699C30.9967 21.6117 30.9492 21.5634 30.8916 21.5301V21.5301ZM22.7974 25.8619C22.1915 25.8637 21.5986 25.6855 21.0939 25.3498C20.5893 25.0141 20.1954 24.536 19.9623 23.976C19.7291 23.4161 19.6672 22.7995 19.7843 22.2043C19.9014 21.6091 20.1923 21.062 20.6201 20.6324C21.0479 20.2028 21.5934 19.91 22.1876 19.7909C22.7817 19.6719 23.3978 19.7321 23.9578 19.9638C24.5177 20.1955 24.9965 20.5884 25.3333 21.0927C25.6701 21.597 25.8499 22.19 25.8499 22.7966C25.8499 23.608 25.5286 24.3863 24.9564 24.9609C24.3842 25.5354 23.6078 25.8595 22.7974 25.8619Z"
                      fill={admin ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: admin ? blueCol : "#FFFFFF" }}
                  >
                    Admin
                  </div>
                </li>
              </NavLink> */}
              {/* <NavLink className='sidebar_list_con' to='/signup'>
              <li onClick={activeSignup} >
                <svg width="22" height="22" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{background: 'none'}}>
                  <path d="M13.4473 13.1238C16.4848 13.1238 18.9473 10.6585 18.9473 7.61732C18.9473 4.57617 16.4848 2.11084 13.4473 2.11084C10.4097 2.11084 7.94727 4.57617 7.94727 7.61732C7.94727 10.6585 10.4097 13.1238 13.4473 13.1238Z"/>
                  <path d="M15.0702 29.2029C14.7672 28.9029 14.5696 28.5127 14.5068 28.0908C14.444 27.6689 14.5194 27.238 14.7218 26.8626L15.2077 25.9449L14.2085 25.642C13.801 25.5143 13.4463 25.2571 13.1982 24.9092C12.95 24.5614 12.822 24.142 12.8335 23.7147V21.8334C12.8327 21.408 12.9687 20.9936 13.2212 20.6515C13.4738 20.3094 13.8296 20.0577 14.236 19.9336L15.2352 19.6308L14.7585 18.713C14.562 18.3428 14.4873 17.9199 14.5449 17.5047C14.6025 17.0894 14.7895 16.7029 15.0793 16.4003C14.3741 16.3078 13.6639 16.2587 12.9527 16.2535C10.852 16.204 8.76622 16.6192 6.84422 17.4695C4.92221 18.3198 3.21129 19.5842 1.8335 21.1726V28.2851C1.8335 28.5285 1.93007 28.762 2.10198 28.9341C2.27389 29.1062 2.50705 29.2029 2.75016 29.2029H15.0702V29.2029Z" fill={admin?blueCol:'white'}/>
                  <path d="M30.8916 21.5301L29.0582 20.9795C28.9312 20.5262 28.7528 20.089 28.5266 19.6763L29.4432 17.9693C29.4787 17.9059 29.4916 17.8324 29.48 17.7607C29.4683 17.6891 29.4327 17.6235 29.3791 17.5746L28.0499 16.2347C27.9987 16.1849 27.9334 16.1519 27.8629 16.1404C27.7924 16.129 27.7201 16.1394 27.6557 16.1705L25.9599 17.0882C25.5425 16.8612 25.1033 16.6767 24.6491 16.5376L24.0899 14.7021C24.0653 14.6344 24.0204 14.576 23.9613 14.535C23.9022 14.4939 23.8318 14.4721 23.7599 14.4727H21.8532C21.7818 14.4747 21.7126 14.4986 21.6552 14.5413C21.5978 14.584 21.555 14.6433 21.5324 14.7113L20.9824 16.5468C20.5194 16.6817 20.0734 16.8695 19.6532 17.1066L17.9941 16.1889C17.9296 16.1545 17.8559 16.1414 17.7835 16.1513C17.7112 16.1611 17.6437 16.1936 17.5907 16.2439L16.2432 17.5655C16.1902 17.6167 16.1552 17.6838 16.1436 17.7566C16.1321 17.8295 16.1445 17.9041 16.1791 17.9693L17.0957 19.6396C16.8502 20.0541 16.6504 20.4942 16.4999 20.952L14.6666 21.5118C14.5972 21.5318 14.5364 21.5741 14.4933 21.6322C14.4503 21.6902 14.4274 21.7607 14.4282 21.833V23.7144C14.4274 23.7866 14.4503 23.8572 14.4933 23.9152C14.5364 23.9732 14.5972 24.0155 14.6666 24.0356L16.4999 24.5954C16.6373 25.0449 16.8217 25.4786 17.0499 25.8894L16.1332 27.6331C16.0987 27.6983 16.0862 27.7729 16.0978 27.8458C16.1094 27.9187 16.1444 27.9858 16.1974 28.0369L17.5632 29.3677C17.6162 29.418 17.6837 29.4505 17.756 29.4603C17.8284 29.4702 17.9021 29.4571 17.9666 29.4227L19.6807 28.505C20.0887 28.7247 20.5189 28.9 20.9641 29.0281L21.5141 30.9095C21.5371 30.9789 21.5814 31.0393 21.6406 31.0821C21.6999 31.1249 21.771 31.148 21.8441 31.1481H23.7232C23.7947 31.1461 23.8638 31.1221 23.9212 31.0795C23.9786 31.0368 24.0215 30.9774 24.0441 30.9095L24.5941 29.0281C25.0339 28.9016 25.4583 28.7262 25.8591 28.505L27.5916 29.4227C27.6561 29.4571 27.7297 29.4702 27.8021 29.4603C27.8745 29.4505 27.9419 29.418 27.9949 29.3677L29.3332 28.0369C29.3835 27.9839 29.4159 27.9164 29.4258 27.8439C29.4357 27.7715 29.4225 27.6977 29.3882 27.6331L28.4716 25.9078C28.6909 25.5057 28.866 25.0811 28.9941 24.6413L30.8274 24.0815C30.8963 24.0593 30.9568 24.0167 31.001 23.9594C31.0452 23.902 31.071 23.8326 31.0749 23.7603V21.8605C31.0772 21.794 31.0613 21.7281 31.029 21.6699C30.9967 21.6117 30.9492 21.5634 30.8916 21.5301V21.5301ZM22.7974 25.8619C22.1915 25.8637 21.5986 25.6855 21.0939 25.3498C20.5893 25.0141 20.1954 24.536 19.9623 23.976C19.7291 23.4161 19.6672 22.7995 19.7843 22.2043C19.9014 21.6091 20.1923 21.062 20.6201 20.6324C21.0479 20.2028 21.5934 19.91 22.1876 19.7909C22.7817 19.6719 23.3978 19.7321 23.9578 19.9638C24.5177 20.1955 24.9965 20.5884 25.3333 21.0927C25.6701 21.597 25.8499 22.19 25.8499 22.7966C25.8499 23.608 25.5286 24.3863 24.9564 24.9609C24.3842 25.5354 23.6078 25.8595 22.7974 25.8619Z" fill={admin?blueCol:'white'}/>
                </svg>
                <div className='side_bar_title' style={{color : 'white'}}>Signup</div>
              </li>     
            </NavLink>          */}
              <NavLink className="sidebar_list_con" to="/user-management">
                <li
                  onClick={activeUserManagement}
                  style={{ background: userManagement ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5011 5.42416H20.8345C20.945 5.42416 21.051 5.38021 21.1291 5.30198C21.2072 5.22374 21.2511 5.11764 21.2511 5.007C21.2511 4.89636 21.2072 4.79026 21.1291 4.71203C21.051 4.63379 20.945 4.58984 20.8345 4.58984H12.5011C12.3906 4.58984 12.2847 4.63379 12.2065 4.71203C12.1284 4.79026 12.0845 4.89636 12.0845 5.007C12.0845 5.11764 12.1284 5.22374 12.2065 5.30198C12.2847 5.38021 12.3906 5.42416 12.5011 5.42416Z"
                      fill={userManagement ? blueCol : "white"}
                    />
                    <path
                      d="M20.8346 6.2583H14.5846C14.4741 6.2583 14.3681 6.30225 14.29 6.38048C14.2119 6.45872 14.168 6.56482 14.168 6.67546C14.168 6.78609 14.2119 6.8922 14.29 6.97043C14.3681 7.04867 14.4741 7.09262 14.5846 7.09262H20.8346C20.9451 7.09262 21.0511 7.04867 21.1293 6.97043C21.2074 6.8922 21.2513 6.78609 21.2513 6.67546C21.2513 6.56482 21.2074 6.45872 21.1293 6.38048C21.0511 6.30225 20.9451 6.2583 20.8346 6.2583Z"
                      fill={userManagement ? blueCol : "white"}
                    />
                    <path
                      d="M23.7513 5.00686H22.9179V2.92108C22.9179 2.81044 22.8741 2.70433 22.7959 2.6261C22.7178 2.54787 22.6118 2.50392 22.5013 2.50392H20.0013V0.418134C20.0013 0.307497 19.9574 0.201391 19.8792 0.123159C19.8011 0.0449269 19.6951 0.000976563 19.5846 0.000976562H2.08461C1.97411 0.000976563 1.86812 0.0449269 1.78998 0.123159C1.71184 0.201391 1.66795 0.307497 1.66795 0.418134V5.00686H1.53461C1.11052 5.02529 0.711016 5.21126 0.423612 5.52402C0.136209 5.83678 -0.0156589 6.25084 0.00127887 6.67549V23.3284C-0.0156966 23.7605 0.138549 24.1819 0.430424 24.5006C0.722298 24.8194 1.12816 25.0098 1.55961 25.0304H23.5054C23.9285 25.0015 24.3231 24.8064 24.6032 24.4876C24.8834 24.1689 25.0264 23.7522 25.0013 23.3284V6.25834C25.0013 5.92642 24.8696 5.60811 24.6352 5.37341C24.4007 5.13871 24.0828 5.00686 23.7513 5.00686V5.00686ZM4.58461 2.92108V5.03189C4.21723 5.11638 3.89101 5.32705 3.66266 5.62732C3.4343 5.92758 3.31823 6.29845 3.33461 6.67549V22.5275H2.50128V0.835291H19.1679V2.50392H5.00128C4.89077 2.50392 4.78479 2.54787 4.70665 2.6261C4.62851 2.70433 4.58461 2.81044 4.58461 2.92108ZM14.1679 22.5275C13.0142 22.5275 11.8864 22.1849 10.9271 21.5432C9.96783 20.9015 9.22016 19.9894 8.77865 18.9222C8.33714 17.8551 8.22162 16.6808 8.4467 15.5479C8.67178 14.415 9.22735 13.3744 10.0432 12.5576C10.859 11.7409 11.8984 11.1846 13.0299 10.9593C14.1615 10.7339 15.3344 10.8496 16.4003 11.2916C17.4662 11.7337 18.3772 12.4822 19.0182 13.4426C19.6592 14.403 20.0013 15.5322 20.0013 16.6873C20.0013 18.2362 19.3867 19.7217 18.2927 20.8169C17.1988 21.9122 15.715 22.5275 14.1679 22.5275V22.5275ZM22.0846 8.34412H13.4846C13.3961 8.34375 13.3111 8.30941 13.2471 8.24818L10.1554 5.32807C9.93672 5.1218 9.64759 5.00691 9.34711 5.00686H5.41795V3.33823H22.0846V8.34412Z"
                      fill={userManagement ? blueCol : "white"}
                    />
                    <path
                      d="M14.168 11.6816C13.1791 11.6816 12.2124 11.9752 11.3901 12.5253C10.5679 13.0753 9.92701 13.8572 9.54857 14.7719C9.17014 15.6866 9.07112 16.6931 9.26404 17.6641C9.45697 18.6352 9.93317 19.5271 10.6324 20.2272C11.3317 20.9273 12.2226 21.4041 13.1925 21.5972C14.1624 21.7904 15.1678 21.6912 16.0814 21.3124C16.995 20.9335 17.7759 20.2919 18.3253 19.4686C18.8747 18.6454 19.168 17.6776 19.168 16.6875C19.168 15.3599 18.6412 14.0866 17.7035 13.1478C16.7658 12.209 15.4941 11.6816 14.168 11.6816ZM18.0721 18.231L17.4471 19.3156C17.3953 19.4054 17.312 19.4726 17.2134 19.5042C17.1149 19.5358 17.008 19.5296 16.9138 19.4867L15.9055 19.0278C15.7223 19.1646 15.5237 19.2794 15.3138 19.3698L15.2055 20.4837C15.1951 20.5869 15.1467 20.6826 15.0696 20.752C14.9926 20.8214 14.8925 20.8596 14.7888 20.8591H13.5388C13.4352 20.8596 13.335 20.8214 13.258 20.752C13.1809 20.6826 13.1325 20.5869 13.1221 20.4837L13.0138 19.3698C12.8039 19.2794 12.6053 19.1646 12.4221 19.0278L11.4138 19.4867C11.3196 19.5296 11.2128 19.5358 11.1142 19.5042C11.0156 19.4726 10.9323 19.4054 10.8805 19.3156L10.2555 18.231C10.2039 18.1416 10.1874 18.0363 10.2089 17.9353C10.2305 17.8344 10.2886 17.745 10.3721 17.6845L11.2763 17.0296C11.2471 16.8025 11.2471 16.5726 11.2763 16.3455L10.3721 15.6905C10.2886 15.63 10.2305 15.5407 10.2089 15.4397C10.1874 15.3388 10.2039 15.2334 10.2555 15.144L10.8805 14.0594C10.9323 13.9697 11.0156 13.9025 11.1142 13.8708C11.2128 13.8392 11.3196 13.8455 11.4138 13.8884L12.4221 14.3473C12.6053 14.2104 12.8039 14.0956 13.0138 14.0052L13.1221 12.8914C13.1325 12.7881 13.1809 12.6925 13.258 12.623C13.335 12.5536 13.4352 12.5154 13.5388 12.516H14.7888C14.8925 12.5154 14.9926 12.5536 15.0696 12.623C15.1467 12.6925 15.1951 12.7881 15.2055 12.8914L15.3138 14.0052C15.5237 14.0956 15.7223 14.2104 15.9055 14.3473L16.9138 13.8884C17.008 13.8455 17.1149 13.8392 17.2134 13.8708C17.312 13.9025 17.3953 13.9697 17.4471 14.0594L18.0721 15.144C18.1237 15.2334 18.1403 15.3388 18.1187 15.4397C18.0972 15.5407 18.039 15.63 17.9555 15.6905L17.0513 16.3455C17.0805 16.5726 17.0805 16.8025 17.0513 17.0296L17.9555 17.6845C18.039 17.745 18.0972 17.8344 18.1187 17.9353C18.1403 18.0363 18.1237 18.1416 18.0721 18.231Z"
                      fill={userManagement ? blueCol : "white"}
                    />
                    <path
                      d="M16.1929 17.1254C16.2549 16.8367 16.2549 16.5381 16.1929 16.2493C16.1776 16.1715 16.1848 16.091 16.2135 16.0171C16.2423 15.9432 16.2915 15.8791 16.3554 15.8322L17.1596 15.2482L16.9138 14.831L16.0096 15.2482C15.9358 15.2814 15.854 15.2923 15.7741 15.2797C15.6942 15.2671 15.6196 15.2315 15.5596 15.1772C15.3421 14.9762 15.0832 14.8253 14.8013 14.7351C14.7241 14.7103 14.6558 14.6636 14.6047 14.6007C14.5537 14.5377 14.5221 14.4612 14.5138 14.3805L14.4138 13.3501H13.9221L13.8221 14.3471C13.8138 14.4278 13.7822 14.5043 13.7311 14.5673C13.6801 14.6303 13.6118 14.677 13.5346 14.7017C13.2526 14.7919 12.9938 14.9429 12.7763 15.1439C12.7162 15.1982 12.6417 15.2338 12.5618 15.2464C12.4819 15.2589 12.4001 15.248 12.3263 15.2148L11.4221 14.7976L11.1763 15.2148L11.9804 15.7988C12.0443 15.8457 12.0935 15.9098 12.1223 15.9837C12.1511 16.0576 12.1583 16.1382 12.1429 16.216C12.081 16.5047 12.081 16.8033 12.1429 17.092C12.1583 17.1698 12.1511 17.2504 12.1223 17.3243C12.0935 17.3981 12.0443 17.4623 11.9804 17.5092L11.1763 18.0932L11.4221 18.5103L12.3263 18.0932C12.4001 18.06 12.4819 18.049 12.5618 18.0616C12.6417 18.0742 12.7162 18.1098 12.7763 18.1641C12.9938 18.3651 13.2526 18.516 13.5346 18.6063C13.6118 18.631 13.6801 18.6777 13.7311 18.7407C13.7822 18.8037 13.8138 18.8802 13.8221 18.9609L13.9221 20.0246H14.4138L14.5138 19.0276C14.5221 18.9469 14.5537 18.8704 14.6047 18.8074C14.6558 18.7444 14.7241 18.6977 14.8013 18.673C15.0832 18.5828 15.3421 18.4318 15.5596 18.2308C15.6196 18.1766 15.6942 18.141 15.7741 18.1284C15.854 18.1158 15.9358 18.1267 16.0096 18.1599L16.9138 18.5771L17.1596 18.1599L16.3554 17.5759C16.2854 17.5266 16.2322 17.4569 16.2032 17.3763C16.1741 17.2957 16.1705 17.2081 16.1929 17.1254V17.1254ZM14.1679 17.9388C13.9207 17.9388 13.679 17.8654 13.4735 17.7279C13.2679 17.5904 13.1077 17.3949 13.0131 17.1663C12.9185 16.9376 12.8937 16.686 12.942 16.4432C12.9902 16.2004 13.1092 15.9775 13.2841 15.8024C13.4589 15.6274 13.6816 15.5082 13.9241 15.4599C14.1666 15.4116 14.4179 15.4364 14.6463 15.5311C14.8747 15.6259 15.0699 15.7863 15.2073 15.9921C15.3446 16.1979 15.4179 16.4398 15.4179 16.6874C15.4179 17.0193 15.2862 17.3376 15.0518 17.5723C14.8174 17.807 14.4995 17.9388 14.1679 17.9388Z"
                      fill={userManagement ? blueCol : "white"}
                    />
                    <path
                      d="M14.1679 17.1043C14.3957 17.1043 14.5804 16.9176 14.5804 16.6872C14.5804 16.4568 14.3957 16.27 14.1679 16.27C13.9401 16.27 13.7554 16.4568 13.7554 16.6872C13.7554 16.9176 13.9401 17.1043 14.1679 17.1043Z"
                      fill={userManagement ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: userManagement ? blueCol : "#FFFFFF" }}
                  >
                    User Management
                  </div>
                </li>
              </NavLink>
              {/* <NavLink className="sidebar_list_con" to="/till">
                <li
                  onClick={activeTill}
                  style={{ background: till ? "#F4F3F6" : "none" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.155 0.0161133H3.33333C2.44928 0.0161133 1.60143 0.371693 0.976311 1.00463C0.351189 1.63756 0 2.49601 0 3.39111V23.6411C0 24.5362 0.351189 25.3947 0.976311 26.0276C1.60143 26.6605 2.44928 27.0161 3.33333 27.0161H16.6667C17.5507 27.0161 18.3986 26.6605 19.0237 26.0276C19.6488 25.3947 20 24.5362 20 23.6411V7.95918C19.9999 7.51166 19.8242 7.08251 19.5117 6.76611L13.3333 0.510551C13.0208 0.194061 12.597 0.0162089 12.155 0.0161133V0.0161133ZM12.5 5.92236V2.54736L17.5 7.60986H14.1667C13.7246 7.60986 13.3007 7.43207 12.9882 7.11561C12.6756 6.79914 12.5 6.36992 12.5 5.92236ZM4.16667 15.2036C3.94565 15.2036 3.73369 15.1147 3.57741 14.9565C3.42113 14.7983 3.33333 14.5836 3.33333 14.3599C3.33333 14.1361 3.42113 13.9215 3.57741 13.7632C3.73369 13.605 3.94565 13.5161 4.16667 13.5161H15.8333C16.0543 13.5161 16.2663 13.605 16.4226 13.7632C16.5789 13.9215 16.6667 14.1361 16.6667 14.3599C16.6667 14.5836 16.5789 14.7983 16.4226 14.9565C16.2663 15.1147 16.0543 15.2036 15.8333 15.2036H4.16667ZM3.33333 17.7349C3.33333 17.5111 3.42113 17.2965 3.57741 17.1382C3.73369 16.98 3.94565 16.8911 4.16667 16.8911H15.8333C16.0543 16.8911 16.2663 16.98 16.4226 17.1382C16.5789 17.2965 16.6667 17.5111 16.6667 17.7349C16.6667 17.9586 16.5789 18.1733 16.4226 18.3315C16.2663 18.4897 16.0543 18.5786 15.8333 18.5786H4.16667C3.94565 18.5786 3.73369 18.4897 3.57741 18.3315C3.42113 18.1733 3.33333 17.9586 3.33333 17.7349ZM4.16667 21.9536C3.94565 21.9536 3.73369 21.8647 3.57741 21.7065C3.42113 21.5483 3.33333 21.3336 3.33333 21.1099C3.33333 20.8861 3.42113 20.6715 3.57741 20.5132C3.73369 20.355 3.94565 20.2661 4.16667 20.2661H10.8333C11.0543 20.2661 11.2663 20.355 11.4226 20.5132C11.5789 20.6715 11.6667 20.8861 11.6667 21.1099C11.6667 21.3336 11.5789 21.5483 11.4226 21.7065C11.2663 21.8647 11.0543 21.9536 10.8333 21.9536H4.16667Z"
                      fill={till ? blueCol : "white"}
                    />
                  </svg>
                  <div
                    className="side_bar_title"
                    style={{ color: till ? blueCol : "#FFFFFF" }}
                  >
                    Till
                  </div>
                </li>
              </NavLink> */}
              <div
                className="sidebar_list_con"
                onClick={() => {
                  setgosReveal(!gosReveal);
                }}
              >
                {/* <li style={{ background: "none", cursor: "pointer" }}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_692_90757)">
                      <path
                        d="M8.23688 13.5142C3.68531 13.5142 0.00140625 17.2024 0 21.7488C0.00140625 26.2971 3.68531 29.9847 8.23688 29.9847C12.7847 29.9847 16.4634 26.2975 16.4658 21.7488V19.3989H13.5248V21.7488C13.5225 23.2136 12.9342 24.5256 11.9752 25.4871C11.0161 26.4485 9.70312 27.0377 8.23781 27.0377C7.54293 27.0389 6.85468 26.9026 6.21274 26.6366C5.57081 26.3705 4.98791 25.98 4.49766 25.4875C4.0048 24.9978 3.61366 24.4155 3.34675 23.7741C3.07984 23.1326 2.94243 22.4447 2.94243 21.7499C2.94243 21.0552 3.07984 20.3673 3.34675 19.7258C3.61366 19.0844 4.0048 18.502 4.49766 18.0124C5.46141 17.0524 6.77109 16.4641 8.23828 16.4622H21.7641C26.3142 16.4622 29.9986 12.8003 30 8.25205C30 6.06774 29.1323 3.9729 27.5877 2.42836C26.0432 0.883826 23.9484 0.0161133 21.7641 0.0161133C17.2153 0.0179883 13.53 3.70189 13.5281 8.25205L13.5263 10.578H16.4653V8.25205C16.4677 6.78861 17.0653 5.47705 18.0263 4.51377C18.9872 3.55564 20.2978 2.96549 21.7636 2.96549C22.4586 2.96416 23.1469 3.10046 23.7889 3.36652C24.4309 3.63258 25.0139 4.02313 25.5042 4.51564C26.4619 5.47658 27.0511 6.78908 27.0511 8.25252C27.0529 8.94683 26.9171 9.63462 26.6513 10.2761C26.3855 10.9175 25.9952 11.4998 25.5028 11.9894C24.5419 12.9489 23.2294 13.5142 21.7636 13.5156L8.23688 13.5142Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_692_90757">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    className="side_bar_title gos_opener"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span>GOS</span>
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      style={{
                        transform: gosReveal
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5598 11.0794C19.2778 11.3487 18.8954 11.5 18.4967 11.5C18.098 11.5 17.7157 11.3487 17.4337 11.0794L9.99092 3.96783L2.54815 11.0794C2.26457 11.3411 1.88476 11.4859 1.49052 11.4826C1.09629 11.4793 0.719168 11.3282 0.44039 11.0619C0.161613 10.7955 0.00348333 10.4352 5.75214e-05 10.0585C-0.00336829 9.68177 0.148185 9.31886 0.422076 9.0479L8.92788 0.920639C9.20985 0.651304 9.59222 0.5 9.99092 0.5C10.3896 0.5 10.772 0.651304 11.054 0.920639L19.5598 9.0479C19.8416 9.31732 20 9.68268 20 10.0636C20 10.4446 19.8416 10.8099 19.5598 11.0794Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </li> */}
              </div>
              {/* <div
                className="gos_childs"
                style={{ display: gosReveal ? "block" : "none" }}
              > */}
              {/* <NavLink className="sidebar_list_con" to="/gos1">
                  <li
                    onClick={activeGos1}
                    style={{ background: gos1 ? "#F4F3F6" : "none" }}
                    className="gos_opener_elem"
                  >
                    
                    <div
                      className="side_bar_title"
                      style={{
                        color: gos1 ? blueCol : "#C5C5C5",
                        display: "block",
                      }}
                    >
                      {" "}
                      {isMobile ? <>G1</> : <>GOS 1</>}{" "}
                    </div>
                  </li>
                </NavLink> */}
              {/* <NavLink className="sidebar_list_con" to="/gos3">
                  <li
                    onClick={activeGos3}
                    style={{ background: gos3 ? "#F4F3F6" : "none" }}
                    className="gos_opener_elem"
                  >
                    <div
                      className="side_bar_title"
                      style={{
                        color: gos3 ? blueCol : "#C5C5C5",
                        display: "block",
                      }}
                    >
                      {isMobile ? <>G3</> : <>GOS 3</>}
                    </div>
                  </li>
                </NavLink>
                <NavLink className="sidebar_list_con" to="/gos4">
                  <li
                    onClick={activeGos4}
                    style={{ background: gos4 ? "#F4F3F6" : "none" }}
                    className="gos_opener_elem"
                  >
                    <div
                      className="side_bar_title"
                      style={{
                        color: gos4 ? blueCol : "#C5C5C5",
                        display: "block",
                      }}
                    >
                      {isMobile ? <>G4</> : <>GOS 4</>}
                    </div>
                  </li>
                </NavLink>
                <NavLink className="sidebar_list_con" to="/gos6">
                  <li
                    onClick={activeGos6}
                    style={{ background: gos6 ? "#F4F3F6" : "none" }}
                    className="gos_opener_elem"
                  >
                    <div
                      className="side_bar_title"
                      style={{
                        color: gos6 ? blueCol : "#C5C5C5",
                        display: "block",
                      }}
                    >
                      {isMobile ? <>G6</> : <>GOS 6</>}
                    </div>
                  </li>
                </NavLink>
              </div>
              <NavLink className="sidebar_list_con" to="/">
                <li style={{ background: "none" }}>
                  <svg
                    width="20"
                    height="27"
                    viewBox="0 0 20 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.92557V23.106C20 24.0144 19.6488 24.8856 19.0237 25.5279C18.3986 26.1702 17.5507 26.5311 16.6667 26.5311H6.00014C5.11609 26.5311 4.26826 26.1702 3.64314 25.5279C3.01803 24.8856 2.66684 24.0144 2.66684 23.106V21.736C2.66684 21.5543 2.73708 21.3801 2.8621 21.2516C2.98712 21.1231 3.15669 21.051 3.3335 21.051C3.51031 21.051 3.67988 21.1231 3.8049 21.2516C3.92992 21.3801 4.00016 21.5543 4.00016 21.736V23.106C4.00016 23.6511 4.21087 24.1738 4.58594 24.5592C4.96101 24.9446 5.46971 25.1611 6.00014 25.1611H16.6667C17.1971 25.1611 17.7058 24.9446 18.0809 24.5592C18.456 24.1738 18.6667 23.6511 18.6667 23.106V3.92557C18.6667 3.38054 18.456 2.85783 18.0809 2.47243C17.7058 2.08703 17.1971 1.87052 16.6667 1.87052H6.00014C5.46971 1.87052 4.96101 2.08703 4.58594 2.47243C4.21087 2.85783 4.00016 3.38054 4.00016 3.92557V5.2956C4.00016 5.47728 3.92992 5.65152 3.8049 5.77998C3.67988 5.90845 3.51031 5.98062 3.3335 5.98062C3.15669 5.98062 2.98712 5.90845 2.8621 5.77998C2.73708 5.65152 2.66684 5.47728 2.66684 5.2956V3.92557C2.66684 3.01718 3.01803 2.146 3.64314 1.50367C4.26826 0.861344 5.11609 0.500488 6.00014 0.500488H16.6667C17.5507 0.500488 18.3986 0.861344 19.0237 1.50367C19.6488 2.146 20 3.01718 20 3.92557ZM7.33346 21.051C7.42085 21.0526 7.50747 21.0339 7.58679 20.9962C7.70853 20.9448 7.81275 20.8575 7.88631 20.7454C7.95986 20.6332 7.99946 20.5012 8.00012 20.366V16.9409H15.3334C15.5102 16.9409 15.6798 16.8687 15.8048 16.7402C15.9298 16.6118 16 16.4375 16 16.2559V10.7757C16 10.5941 15.9298 10.4198 15.8048 10.2914C15.6798 10.1629 15.5102 10.0907 15.3334 10.0907H8.00012V6.66563C7.99946 6.53039 7.95986 6.39838 7.88631 6.28623C7.81275 6.17408 7.70853 6.08681 7.58679 6.03542C7.46646 5.98029 7.33238 5.96519 7.20329 5.99221C7.0742 6.01923 6.95655 6.08703 6.8668 6.18612L0.200198 13.0363C0.136943 13.0981 0.0865776 13.1725 0.0521623 13.2549C0.017747 13.3373 0 13.4261 0 13.5158C0 13.6055 0.017747 13.6943 0.0521623 13.7767C0.0865776 13.8591 0.136943 13.9335 0.200198 13.9953L6.8668 20.8455C6.92627 20.9113 6.99854 20.9637 7.07892 20.9991C7.1593 21.0345 7.24601 21.0522 7.33346 21.051Z"
                      fill="white"
                    />
                  </svg>
                  <div className="side_bar_title" style={{ color: "#FFFFFF" }}>
                    Logout
                  </div>
                </li>
              </NavLink> */}
              {/* </div> */}
            </ul>
          )}
          <div className="sponsored_logo">
            <div className="flex powered_txt">Powered By</div>
            <div className="flex">
              <img src="/sponsor.png" alt="" />
            </div>
          </div>
        </div>
        <div className="home_page_right">
          {user.username && (
            <div className="navbar">
              <div className="nav_left">
                <div className="search_con">
                  <input
                    className="nav_search_input"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.3389 17.4129L26.6015 24.6758C26.8568 24.9312 27.0001 25.2776 27 25.6388C26.9999 25.9999 26.8563 26.3462 26.6008 26.6015C26.3454 26.8568 25.999 27.0001 25.6379 27C25.2767 26.9999 24.9304 26.8563 24.6752 26.6008L17.4125 19.338C15.2414 21.0196 12.5112 21.811 9.77742 21.5511C7.04359 21.2912 4.51146 19.9995 2.69613 17.9389C0.880803 15.8783 -0.0813541 13.2035 0.00539479 10.4586C0.0921436 7.71377 1.22128 5.10506 3.16311 3.16318C5.10493 1.22131 7.71357 0.0921459 10.4584 0.00539492C13.2031 -0.0813561 15.8779 0.880824 17.9384 2.6962C19.999 4.51157 21.2906 7.04377 21.5505 9.77767C21.8104 12.5116 21.0191 15.2418 19.3375 17.4129H19.3389ZM10.8005 18.8992C12.9487 18.8992 15.0088 18.0459 16.5278 16.5269C18.0468 15.0079 18.9001 12.9476 18.9001 10.7994C18.9001 8.65121 18.0468 6.59099 16.5278 5.07198C15.0088 3.55297 12.9487 2.6996 10.8005 2.6996C8.65235 2.6996 6.59218 3.55297 5.0732 5.07198C3.55423 6.59099 2.70088 8.65121 2.70088 10.7994C2.70088 12.9476 3.55423 15.0079 5.0732 16.5269C6.59218 18.0459 8.65235 18.8992 10.8005 18.8992Z"
                      fill="#777777"
                    />
                  </svg>
                </div>
                <div className="notify_con flex">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.67386 19.8681C8.0578 19.7785 7.47568 19.5299 6.98482 19.147C6.78961 19.0193 6.62594 18.8489 6.50617 18.6488C6.3864 18.4486 6.31367 18.2238 6.29342 17.9914C6.29342 17.4975 6.74776 17.2605 7.17249 17.1617C8.48769 17.0649 9.80822 17.0649 11.1234 17.1617C11.5481 17.2605 12.0025 17.4877 12.0025 17.9914C11.9841 18.2231 11.9132 18.4476 11.7951 18.6478C11.677 18.8481 11.5149 19.0188 11.321 19.147C10.8275 19.5319 10.2417 19.7806 9.62208 19.8681C9.45761 19.8782 9.29268 19.8782 9.12821 19.8681C8.97687 19.8764 8.8252 19.8764 8.67386 19.8681V19.8681ZM4.50563 15.6999C3.41282 15.6009 2.39395 15.1055 1.64118 14.3072C1.08521 13.6508 0.783746 12.8165 0.791744 11.9563C0.741911 11.1328 0.998783 10.32 1.5128 9.67469C1.87321 9.30388 2.15243 8.86207 2.3327 8.37741C2.51296 7.89274 2.5903 7.37584 2.55979 6.85964V6.43492C2.49577 5.05283 2.95016 3.69666 3.83395 2.63215C4.48519 1.85553 5.29815 1.23044 6.21598 0.800528C7.13382 0.370611 8.13442 0.146233 9.14796 0.143066H9.23685C10.273 0.144306 11.2956 0.378397 12.2291 0.828041C13.1626 1.27768 13.983 1.93138 14.6299 2.7408C15.4654 3.78476 15.8873 5.09975 15.8152 6.43492V6.85964C15.7913 7.37353 15.8699 7.88702 16.0462 8.37029C16.2225 8.85355 16.4932 9.29694 16.8424 9.67469C17.3547 10.3209 17.6114 11.1331 17.5635 11.9563C17.5715 12.8165 17.27 13.6508 16.714 14.3072C15.9612 15.1055 14.9424 15.6009 13.8496 15.6999C12.2988 15.8381 10.7382 15.9468 9.16773 15.9468C7.61028 15.9525 6.05376 15.87 4.50563 15.6999V15.6999Z"
                      fill="#7D8CAC"
                    />
                  </svg>
                </div>
              </div>
              {/* <div className="nav_right">
                <div className="nav_right_image">
                  <img src="/profile.jpeg" alt="" />
                </div>
                <div className="nav_right_text">John Smith</div>
              </div> */}
            </div>
          )}

          {showSearch && (
            <div
              style={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                padding: "15px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
            >
              <div
                className="close-container"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "10px",
                }}
              >
                <div
                  className="close"
                  onClick={() => setShowSearch(false)}
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  ✕
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {searchResult?.map((patient) => (
                  <li
                    onClick={() => handleClick(patient)}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      borderBottom: "1px solid #ddd",
                      color: "#333",
                      fontWeight: "500",
                    }}
                    key={patient._id}
                  >
                    {patient.forename + " " + patient.surname}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="main_pages">
            <Routes>
              <Route
                path="/"
                element={
                  <Protected user={user}>
                    <PatientNew />
                  </Protected>
                }
              />
              <Route
                path="/diary"
                element={
                  <Protected user={user}>
                    <Diary />
                  </Protected>
                }
              />
              <Route
                path="/patient"
                element={
                  <Protected user={user}>
                    <PatientNew />
                  </Protected>
                }
              />
              <Route
                path="/doctor"
                element={
                  <Protected user={user}>
                    <CreateDoctorForm />
                  </Protected>
                }
              />
              <Route
                path="/communication"
                element={
                  <Protected user={user}>
                    <Communication />
                  </Protected>
                }
              />
              <Route
                path="/tasks"
                element={
                  <Protected user={user}>
                    <Tasks />
                  </Protected>
                }
              />
              <Route
                path="/stock"
                element={
                  <Protected user={user}>
                    <Stock />
                  </Protected>
                }
              />
              <Route
                path="/reporting"
                element={
                  <Protected user={user}>
                    <Stock />
                  </Protected>
                }
              />
              <Route
                path="/admin"
                element={
                  <Protected user={user}>
                    <Admin />
                  </Protected>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Signin />} />
              <Route
                path="/edit-user/:id"
                element={
                  <Protected user={user}>
                    <EditUser />
                  </Protected>
                }
              />
              <Route
                path="/user-management"
                element={
                  <Protected user={user}>
                    <UserManagement />
                  </Protected>
                }
              />
              <Route
                path="/till"
                element={
                  <Protected user={user}>
                    <Till />
                  </Protected>
                }
              />
              <Route
                path="/gos1"
                element={
                  <Protected user={user}>
                    <GOS1 />
                  </Protected>
                }
              />
              <Route
                path="/gos3"
                element={
                  <Protected user={user}>
                    <GOS3 />
                  </Protected>
                }
              />
              <Route
                path="/gos4"
                element={
                  <Protected user={user}>
                    <GOS4 />
                  </Protected>
                }
              />
              <Route
                path="/gos6"
                element={
                  <Protected user={user}>
                    <GOS6 />
                  </Protected>
                }
              />
              <Route
                path="/new-sight-test"
                element={
                  <Protected user={user}>
                    <NewSightTest />
                  </Protected>
                }
              />
              <Route
                path="/new-cl-test"
                element={
                  <Protected user={user}>
                    <NewCLTest />
                  </Protected>
                }
              />
              <Route
                path="/cl-after-care"
                element={
                  <Protected user={user}>
                    <CLAftercare />
                  </Protected>
                }
              />
              <Route
                path="/pre-screening"
                element={
                  <Protected user={user}>
                    <PreScreening />
                  </Protected>
                }
              />
              <Route
                path="/new-dispense"
                element={
                  <Protected user={user}>
                    <NewDispense />
                  </Protected>
                }
              />
              <Route
                path="/sales-summary"
                element={
                  <Protected user={user}>
                    <SalesSummary />
                  </Protected>
                }
              />
              <Route
                path="/sales-details"
                element={
                  <Protected user={user}>
                    <SalesDetails />
                  </Protected>
                }
              />
              <Route
                path="/staff-performance"
                element={
                  <Protected user={user}>
                    <StaffPerformance />
                  </Protected>
                }
              />
              <Route
                path="/kpis"
                element={
                  <Protected user={user}>
                    <Kpis />
                  </Protected>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      {showLogin && (
        <>
          <Login showLogin={showLogin} setshowLogin={setshowLogin} />
        </>
      )}
    </div>
  );
}
export default App;
