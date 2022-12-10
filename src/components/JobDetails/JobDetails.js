import {useParams, Link} from 'react-router-dom';
import {useGetDataQuery} from '../../store/dataApi';
import {differenceInMonths} from 'date-fns'
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
    const {title, createdAt, salary, description} = currentJob;
    const difference = differenceInMonths(new Date(), new Date(createdAt));
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
            <button type='button' className='btnApplyDesctop'>Apply now</button>
            <div className='titleDivMobile'>
                <p className='title'>{title}</p>
                <div className="postedSalaryDivMobile">
                    <p className='posted'>Posted {difference} months ago</p>
                    <div className='salaryDiv'>
                        <p className='brutto'>Brutto, per year</p>
                        <p className='salary'>{salary}</p>
                    </div>
                </div>
            </div>
            <div className='titleDivDesctop'>
                <p className='title'>{title}</p>
                <div className='salaryDiv'>
                    <p className='salary'>{salary}</p>
                    <p className='brutto'>Brutto, per year</p>
                </div>
            </div>
            <p className='postedDesctop'>Posted {difference} months ago</p>


            <p>{description}</p>

            {<Link to='/'>Back</Link>}
        </div>
    )
}
export default JobDetails;

