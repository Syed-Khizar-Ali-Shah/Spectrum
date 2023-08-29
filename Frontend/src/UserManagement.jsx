import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './UserManagement.css'

function UserManagement() {
  const table = [
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
    {
      id: 1,
      name: 'John Smith',
      task:'Lorem',
      taskType:'Stock exchange',
      taskDue: '12/1/23',
      time:'at 1:00PM',
      patientName: 'Nick john',
      status: 'urgent',
    },
  ]
  const [currentPage, setCurrentPage] = React.useState(1);
  // Function to handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    // window.scrollTo(0,428);
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    // Replace 'article-1' with the id of the target div
    // const targetDiv = document.getElementById('article-main');
    // if (targetDiv) {
    //   targetDiv.scrollIntoView({ behavior: 'smooth' });
    // }
  };
  // Calculate index of the first article to display on the current page
  const startIndex = (currentPage - 1) * 5;
  // Calculate index of the last article to display on the current page
  const endIndex = startIndex + 5;
  // Extract the portion of the array to display on the current page
  const displayedTasks = table.slice(startIndex, endIndex);
  return (
    <>
        <div className='page_title flex_between' >
          <div>User</div>            
          <div className='add_task_btn' style={{width:'5rem'}}>
            <svg width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6875 8.3125V0H8.3125V8.3125H0V10.6875H8.3125V19H10.6875V10.6875H19V8.3125H10.6875Z" fill="white"/>
            </svg>
            <div>Add</div>
          </div>
        </div>
        <div className="user_header">
              <div>#ID</div>
              <div>Name</div>
              <div>Email</div>
              <div>Role</div>
              <div>Member Since</div>
              <div>Password</div>
              <div>Action</div>
            </div>
            <div className="tasks_body">
              { 
                displayedTasks.map((val,ind)=>{
                  return(<>
                    <div className="user_elem">
                      <div className="user_elem_child">{ind+1}</div>
                      <div className="user_elem_child">John Smith</div>
                      <div className="user_elem_child">admin@gmail.com</div>
                      <div className="user_elem_child">Admin</div>
                      <div className="user_elem_child">12/1/23</div>
                      <div className="user_elem_child"> ******** </div>
                      <div className="user_elem_child gap20" >
                        <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                          <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                          <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                        </svg>
                      </div>
                    </div>
                  </>)
                })
              }
            </div>
            <div className='table_pagination' >
              <div className="tg_txt" >Showing {displayedTasks.length} of {table.length} entries</div>
              <Stack spacing={2}>
                <Pagination 
                  count={Math.ceil(table.length / 5)}
                  page={currentPage}
                  onChange={handlePageChange}
                  shape="rounded"
                  size='small'
                />
              </Stack>
            </div>
    </>
  )
}

export default UserManagement
