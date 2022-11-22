import { Routes, Route } from 'react-router-dom';
import JobsList from './components/jobsList/jobsList';
import JobDetails from './components/JobDetails/JobDetails';


export const App = () => {
    return (
    <Routes>
      <Route exact path="/" element={<JobsList />}></Route>
        <Route path="job/:jobId" element={<JobDetails />}></Route>
    </Routes>

  );
};
// export default App;