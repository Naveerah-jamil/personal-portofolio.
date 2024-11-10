import "../style/education.css"
const Education = () => {
   console.log("Education component loaded");
   return (
     <main className="edu-main">
       <div className="edu-text">
         <h1>Education</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam ipsa mollitia fuga magnam temporibus sapiente porro sunt, explicabo facilis.</p>
       </div>
       <div className="box-con-edu">
         <div>
           <h1 className="uni-name">University of Karachi</h1>
           <span>Student</span>
         </div>
         <div className="computer">
            <h1>Bachelor in computer science</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Eligendi delectus ipsa voluptatem nulla minima totam repudiandae expedita inventore officia autem!</p>
         </div>
         {/* box 2 */}
         <div>
           <h1 className="uni-name">University of Karachi</h1>
           <span>Student</span>
         </div>
         <div className="computer">
            <h1>Bachelor in computer science</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus ipsa voluptatem nulla minima totam repudiandae expedita inventore officia autem!</p>
         </div>
         {/* box 3*/}
         <div>
           <h1 className="uni-name">University of Karachi</h1>
           <span>Student</span>
         </div>
         <div className="computer">
            <h1>Bachelor in computer science</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus ipsa voluptatem nulla minima totam repudiandae expedita inventore officia autem!</p>
         </div>
         
       </div>
     </main>
   );
 };
 export default Education;
 