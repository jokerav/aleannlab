import { useParams, Link } from 'react-router-dom';
import {useGetDataQuery} from '../../store/dataApi';

const JobDetails = ()=>{
  const { data = []
    // , error, isLoading
  } = useGetDataQuery();
  const {jobId} = useParams();
  const [currentJob] = data.filter(job => job.id === jobId);
  console.log(currentJob);
  const {description} = currentJob;
  return(
    <>
{<Link to='/'>Back</Link>}
      <p>{jobId}</p>
      <p>{description}</p></>
  )
}
export default JobDetails;

