import { useGetDataQuery } from '../../store/dataApi';
import JobItem from '../jobItem/JobItem';
import './jobsList.scss'

const JobsList = ()=>{
  const { data = []
    // , error, isLoading
  } = useGetDataQuery();
  // console.log(data);
return(

  <ul className='jobList'>
    {data.length > 0 && data.map(job => (
        <JobItem
            key={job.id}
          job={job}
        />
      ))}
  </ul>

)}
export default JobsList;
