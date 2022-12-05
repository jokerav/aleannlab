import {useParams, Link} from 'react-router-dom';
import {useGetDataQuery} from '../../store/dataApi';
import {ReactComponent as BookMark} from '../../img/Rectangle 31.svg';
import {ReactComponent as Star} from '../../img/star.svg';
import {ReactComponent as Share} from '../../img/Share.svg';
import './jobDetails.scss'

const JobDetails = () => {
    const {
        data = []
        // , error, isLoading
    } = useGetDataQuery();
    const {jobId} = useParams();
    const [currentJob] = data.filter(job => job.id === jobId);
    console.log(currentJob);
    const {description} = currentJob;
    return (
        <div className='containerDetails'>
            <div className='headerContainer'>
            <p className='jobDetails'>Job Details</p>
            <hr className='lineMobile'/>
            <div className='shareContainer'>
                <BookMark className='bookMarkDetail'/>
                <Star className='star'/>
                <p className='saveToMyList'>Save to my list</p>
                <Share className='share'/>
                <p className='share'>Share</p>
            </div>
            </div>
            <hr className='lineDesctop'/>


            <p>{description}</p>

            {<Link to='/'>Back</Link>}
        </div>
    )
}
export default JobDetails;

