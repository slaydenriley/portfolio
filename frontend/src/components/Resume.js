import resume from '../images/resumeImg.jpg'
import resumePdf from '../images/resumePdf.pdf'
const Resume = () => {
  return(
    <div className="resume">
      <h1>Resume</h1>
      <hr className="line"/>
      <em>Click image to download...</em><br/>
      <a href={resumePdf} download>
        <img src={resume}/>
      </a>
    </div>
  )
}

export default Resume
