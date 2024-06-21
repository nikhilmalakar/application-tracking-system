
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Employer/Home';
import { Navbar } from './components/Navbar';
import { PostJob } from './Pages/Employer/PostJob';
import { AllJobs } from './Pages/Employer/AllJobs';
import { Login } from './components/Login/Login';
import { Register } from './components/Login/Register';
import { RecruiterDashboard } from './Pages/Recruiter/RecruiterDashboard';
import { CoordinatorDashboard } from './Pages/Coordinator/CoordinatorDashboard';
import { JobDetails } from './components/Home/JobDetails';
import { CandidateProfile } from './Pages/Recruiter/CandidateProfile';
import { ShortlistedCandidates } from './components/ShortlistedCandidates';
import { ShortlistedDetails } from './components/ShortlistedDetails';
import { ApplicationForm } from './Pages/Candidate/ApplicationForm';
import { AssignRecruiter } from './Pages/Coordinator/AssignRecruiter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
          {/* <h1 className='text-5xl text-green-600 '>Hello</h1> */}
          <Route path='/' element={<Navbar />}> 
            <Route path='/' element={<Home />}/>
            <Route path='/post-job' element={<PostJob />}/>
            <Route path='/all-jobs' element={<AllJobs />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>


            {/* <Route path='/job-detail' element={<JobDetails />}/> */}
            <Route path='/current-job/:id' element={<JobDetails />}/>
            <Route path='/application-form/:id' element={<ApplicationForm />}/>
            <Route path='/candidate/:id' element={<CandidateProfile />}/>
            <Route path='/shortlist' element={<ShortlistedCandidates />}/>
            <Route path='/shortlist/details/:candidate_id/:job_id' element={<ShortlistedDetails />}/>
            <Route path='/assign-recruiter/:id' element={<AssignRecruiter />}/>

            <Route path='/recruiter/review' element={<RecruiterDashboard />}/>
            {/* <Route path='/recruiter/review' element={<RecruiterDashboard />}/> */}
            <Route path='/coordinator/review' element={<CoordinatorDashboard />}/>
              
          </Route>
          
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
