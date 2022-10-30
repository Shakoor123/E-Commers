import "./LeftChart.scss"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
const LeftChart = () => {
  return (
    <div className="leftchart">
      <div className="top">
        <span className="title">Revenue</span>
        <MoreVertRoundedIcon/>
      </div>
      <div className="bottom">
        <div className="graph">
          <CircularProgressbar value={70}  text={`70%`} strokeWidth={4}/>
        </div>
        <p className="titles">total sale revenue today</p>
        <p className="amount">RS 5000</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat!</p>
        <div className="summery">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon/>
              <div className="resultAmount">$12.04</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Month Revenue</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon/>
              <div className="resultAmount">$12.04</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Year Revenue</div>
            <div className="itemResult negative">
              <KeyboardArrowDownRoundedIcon/>
              <div className="resultAmount">$12.04</div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default LeftChart