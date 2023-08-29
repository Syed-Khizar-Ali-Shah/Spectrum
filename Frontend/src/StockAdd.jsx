import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function StockAdd({blueCol}) {
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
      const [showPage2,setshowPage2] = React.useState(false);
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
            <div className="stock_table_header">
              <div className="header_child">#ID</div>
              <div className="header_child">Product Name</div>
              <div className="header_child">Type</div>
              <div className="header_child">Price</div>
              <div className="header_child">Quantity</div>
              <div className="header_child">Barcode available</div>
              <div className="header_child">Action</div>
            </div>
            <div className="tasks_body">
              { 
                displayedTasks.map((val,ind)=>{
                  return(<>
                    <div className="sa_body_elem">
                      <div className="sa_body_elem_child">{ind+1}</div>
                      <div className="sa_body_elem_child">Lorem Ipsum</div>
                      <div className="sa_body_elem_child">Spectacles</div>
                      <div className="sa_body_elem_child">$12.00</div>
                      <div className="sa_body_elem_child">14</div>
                      <div className="sa_body_elem_child">Yes</div>
                      <div className="sa_body_elem_child" style={{gap:'20px'}} >
                        <button className='stock_add_btn' style={{backgroundColor:blueCol}} >Add</button>
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

export default StockAdd
