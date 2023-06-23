import React from 'react'
import { Bar } from 'react-chartjs-2'
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
 } from 'chart.js'


 ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
 )

 const pieData = {
  indexAxis: "x",
  labels: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Node'],
  datasets: [
    {
      label: 'Skills',
      data: [85, 90, 80, 83, 60, 70],
      // backgroundColor: [
      //   '#00b89349',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)',
      // ],
      // borderColor: [
      //   '#00b894',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      backgroundColor: "#8a24e8",
      color: "white",
      borderWidth: 1,
    },
  ],
};



const TechStack = () => {
  return (
    <div 
    className='tech-stack max-width pt-5 pb-5'
    id="tech-stack">
      <p className="title">TECHSTACK</p>
      <h1 className="sub-title mb-0 mt-3">Why Me?</h1>
      
      <div className="row pt-lg-3 ps-lg-5 ps-md-3 pe-md-5 pe-lg-5 pt-0 ps-1 pe-1 justify-content-center align-items-center m-lg-3 mt-5 mb-5 w-100">

        
      <div className="col-12 about-left col-md-6  col-lg-6 p-4 pe-lg-4">
        <p className="about-title text-uppercase">A little about me.</p>
        <p>My passion for technology is matched only by my love for the arts, and I believe that this combination allows me to approach problem-solving in a truly creative and innovative way.</p>
        <p>Whether I'm designing a website, coding an application, or creating a piece of art, I always strive to deliver the highest quality work possible</p>
        <p>With a focus on user experience and aesthetics, And when I'm not working on a project, you can often find me expressing my creativity through music or painting, constantly exploring new ways to express myself through art.</p><br/>
        <img src="https://msiddhesh008.github.io/react-portfolio-web-app/static/media/sign1.a5e7eabd546880a16bc9.png"
             width={120}
             alt="sign" />
        <p className='about-sign mt-1'>Siddhesh More</p>
      </div>
        
        <div className="chart col-11 col-lg-6 col-md-6 p-lg-3 pb-5">
          
        <p className="about-title d-block d-lg-none">Skills.</p>
          <Bar
          options={{
            maintainAspectRatio:false
          }}
          data={pieData}
           />
           
        </div>
        <p className='w-100 text-end p-4 p-lg-1 text-white opacity-25'>Note: The above graph is made up of ChartJs</p>
      </div>
    </div>
  )
}

export default TechStack