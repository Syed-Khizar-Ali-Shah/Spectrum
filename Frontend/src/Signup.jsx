import React, { useState } from "react";
import "./Login.css";
import { baseUrl } from "./utils/data";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SyncLoader from 'react-spinners/SyncLoader'
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const notify = () => {
    toast.success('Registered Successfully')
  }

  const notifyErr = () => {
    toast.error('Something went wrong')
  }

  const handleSubmit = async () => {
    if(!username || !email || !userType || !password) {
        return
    }
    setLoading(true)
    try {
       const res = axios.post(`${baseUrl}/api/auth/register`, {username, email, userType, password});
       notify();
       setLoading(false)
       setTimeout(() => {
        navigate('/user-management');
       },1000)
    } catch(err) {
        console.log(err);
        notifyErr();
        setLoading(false)
    }

  }
  return (
    <>
       <ToastContainer />
      <div style={{width: "100%", height:"100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div
            className="login_main_box"
            style={{ width: "70%", height: "60%"}}
          >
            <svg
              width="238"
              height="50"
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
            <div
              className="login_txt"
              style={{
                marginTop: "2rem",
                fontSize: "20px",
                letterSpacing: "1.5px",
              }}
            >
              Add User
            </div>
            <div className="login_input_con">
              <div className="login_txt">{userType ? userType : 'User Type'}</div>
              <select
                id="userType"
                value={userType} // Use the selectedUserType state variable
                onChange={(e) => setUserType(e.target.value)} // Update the selectedUserType state
                style={{ width: "25px" }}
              >
                <option value=""></option>
                <option value="Admin">Admin</option>
                <option value="Optom">Optom</option>
                <option value="Manager">Manager</option>
                <option value="Dispensing">Dispensing</option>
              </select>
            </div>
            <div className="login_input_con">
              <input
                type="text"
                placeholder="Username"
                className="login_txt"
                style={{
                  border: "none",
                  background: "none",
                  color: "white",
                  outline: "none",
                }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <svg
                width="35"
                height="22"
                viewBox="0 0 35 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.1467 28.6934C32.0042 26.372 29.4043 24.5195 26.5106 23.2525C23.6169 21.9854 20.4922 21.3313 17.3333 21.3313C14.1744 21.3313 11.0497 21.9854 8.15608 23.2525C5.26241 24.5195 2.66247 26.372 0.52 28.6934C0.189222 29.0591 0.00418971 29.5336 0 30.0267V38.0267C0.00701126 38.5525 0.220816 39.0544 0.595132 39.4237C0.969447 39.793 1.47416 40.0001 2 40H32.6667C33.1971 40 33.7058 39.7893 34.0809 39.4142C34.456 39.0392 34.6667 38.5305 34.6667 38V30C34.656 29.5161 34.4714 29.0523 34.1467 28.6934Z"
                  fill="white"
                />
                <path
                  d="M17.3333 18.6667C22.488 18.6667 26.6667 14.488 26.6667 9.33333C26.6667 4.17868 22.488 0 17.3333 0C12.1787 0 8 4.17868 8 9.33333C8 14.488 12.1787 18.6667 17.3333 18.6667Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="login_input_con">
              <input
                type="email"
                placeholder="Email"
                className="login_txt"
                style={{
                  border: "none",
                  background: "none",
                  color: "white",
                  outline: "none",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <svg
                width="35"
                height="22"
                viewBox="0 0 35 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.1467 28.6934C32.0042 26.372 29.4043 24.5195 26.5106 23.2525C23.6169 21.9854 20.4922 21.3313 17.3333 21.3313C14.1744 21.3313 11.0497 21.9854 8.15608 23.2525C5.26241 24.5195 2.66247 26.372 0.52 28.6934C0.189222 29.0591 0.00418971 29.5336 0 30.0267V38.0267C0.00701126 38.5525 0.220816 39.0544 0.595132 39.4237C0.969447 39.793 1.47416 40.0001 2 40H32.6667C33.1971 40 33.7058 39.7893 34.0809 39.4142C34.456 39.0392 34.6667 38.5305 34.6667 38V30C34.656 29.5161 34.4714 29.0523 34.1467 28.6934Z"
                  fill="white"
                />
                <path
                  d="M17.3333 18.6667C22.488 18.6667 26.6667 14.488 26.6667 9.33333C26.6667 4.17868 22.488 0 17.3333 0C12.1787 0 8 4.17868 8 9.33333C8 14.488 12.1787 18.6667 17.3333 18.6667Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="login_input_con">
              <input
                type="password"
                placeholder="Password"
                className="login_txt"
                style={{
                  border: "none",
                  background: "none",
                  color: "white",
                  outline: "none",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                width="34"
                height="22"
                viewBox="0 0 34 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.0784 15.4766H27.8266V11.4298C27.828 11.4125 27.828 11.3957 27.828 11.3808C27.828 5.10576 22.7227 0 16.4458 0C10.1707 0 5.06496 5.10576 5.06496 11.3808V15.4766H1.25808C1.09285 15.4766 0.929225 15.5091 0.776559 15.5723C0.623894 15.6355 0.485178 15.7281 0.368342 15.845C0.251506 15.9618 0.15884 16.1005 0.0956374 16.2532C0.0324354 16.4059 -6.29857e-05 16.5695 9.16459e-08 16.7347V35.2459C-6.29857e-05 35.4112 0.0324354 35.5748 0.0956374 35.7274C0.15884 35.8801 0.251506 36.0188 0.368342 36.1357C0.485178 36.2525 0.623894 36.3452 0.776559 36.4084C0.929225 36.4716 1.09285 36.5041 1.25808 36.504H32.0789C32.2441 36.5041 32.4077 36.4716 32.5604 36.4084C32.7131 36.3452 32.8518 36.2525 32.9686 36.1357C33.0854 36.0188 33.1781 35.8801 33.2413 35.7274C33.3045 35.5748 33.337 35.4112 33.337 35.2459V16.7347C33.337 16.5695 33.3044 16.4058 33.2411 16.2532C33.1779 16.1005 33.0852 15.9618 32.9683 15.845C32.8514 15.7281 32.7127 15.6355 32.56 15.5723C32.4073 15.5091 32.2437 15.4766 32.0784 15.4766ZM11.7677 11.3808C11.7677 8.8008 13.8658 6.70512 16.4458 6.70512C19.0094 6.70512 21.0994 8.77872 21.1243 11.3366L21.1229 11.3515H21.1243V15.4766H11.7677V11.3808Z"
                  fill="white"
                />
              </svg>
            </div>
            <button onClick={handleSubmit}>{loading ? <SyncLoader color="#ffffff" /> : 'Add User'}</button>
            <div className="login_powered">
              <div>Powered by</div>
              <img src="/powered.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
