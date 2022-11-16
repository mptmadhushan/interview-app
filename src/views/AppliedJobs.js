import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../componet/Footer";
import SideBar from "../componet/SideBar";
import TopNavBar from "../componet/TopNavBar ";

function AppliedJobs() {
  return (
    <div className="">
      <div className="container-background"></div>
      <div className="wrapper">
        {/* SideBar  */}
        <SideBar />
        <div className="main">
          {/* Nav Bar */}
          <TopNavBar />
          <main className="content">
            <h1 className="h3 mb-3 main-header-bg">
              Candiate Applied Jobs Page
            </h1>
            <h4 className=" mt-4 main-header-bg text-center">Selected Jobs</h4>
            <hr />
            <div class="row">
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                  <Link to="/interview" className="btn btn-primary">
                    Interview Training
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                  <Link to="/interview" className="btn btn-primary">
                    Interview Training
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                  <Link to="/interview" className="btn btn-primary">
                    Interview Training
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                  <Link to="/interview" className="btn btn-primary">
                    Interview Training
                  </Link>
                </div>
              </div>
            </div>
            <h4 className=" mt-4 main-header-bg text-center">Pending Jobs</h4>
            <hr />
            <div class="row">
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h5 className="text-center">Job 1</h5>
                  <ul>
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                    <li>text 4</li>
                  </ul>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs;
