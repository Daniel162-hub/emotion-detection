//Set the hash to loadFile
if(!location.hash){
    location.hash = "#loadFile";
};

//Reference Section Element
const Section = document.getElementById("section");

//Update Section on Load
UpdateSection();

//Update Section Contents when hash is changed.
window.addEventListener("hashchange", () =>{
    UpdateSection();
})

function UpdateSection(){
    var sectionName = location.hash.substring(1);
    console.log(sectionName);
    UpdateSectionContent(sectionName);
}

//Updates the innerHTML of the section element.
function UpdateSectionContent(sectionName){
    Section.innerHTML = GetSectionContent(sectionName);
}

//Get Section Content based on the SectionName
function GetSectionContent(sectionName){
    if(sectionName == "loadFile")
        return FileLoad();
    else if(sectionName == "mainView")
        return MainView();
    else if(sectionName == "mainEmployer")
        return MainEmployer();
    else if(sectionName == "employerProfile")
        return EmployerProfile();
    else if(sectionName == "applicantProfile")
        return ApplicantProfile();
    else if(sectionName == "addEditJobView")
        return AddEditJobView();
    else if(sectionName == "displayJobView")
        return DisplayJobView();
    else
        return SectionNotFoundContent();
}

//Section Template Functions - Returning html for that section.
function FileLoad(){
    return `
    <p class="section-title">Load File</p>
    <div class="section-nav">
        <a href="#loadFile" class="nav-link grey-btn btn-disabled">Load File</a>
        <a href="#mainView" class="nav-link green-btn">Main View</a>
        <a href="#mainEmployer" class="nav-link green-btn">Main Employer</a>
        <a href="#employerProfile" class="nav-link green-btn">Employer Profile</a>
        <a href="#addEditJobView" class="nav-link green-btn">Add/ Edit Job</a>
        <a href="#applicantProfile" class="nav-link green-btn">Applicant Profile</a>
        <a href="#displayJobView" class="nav-link green-btn">Job Display</a>
    </div>
    `;
}
function MainView(){
    return `
    <p class="section-title">Main View</p>
    <div class="section-nav">
        <a href="#loadFile" class="nav-link green-btn">Load File</a>
        <a href="#mainView" class="nav-link grey-btn btn-disabled">Main View</a>
        <a href="#employerProfile" class="nav-link green-btn">Employer Profile</a>
        <a href="#applicantProfile" class="nav-link green-btn">Applicant Profile</a>
</div>
<table id ="customers">
  <tr>
    <th>Role Category</th>
    <th>Role</th>
    <th>Location</th>
    <th>Industry</th>
    <th>Function</th>
    <th>Job Title</th>
    <th>Experience</th>
    <th>Salary</th>
    <th>Details/ Apply</th>
  </tr>
  <tr>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
  </tr>
</table>
    `;
}

function MainEmployer(){
    return `
    <p class="section-title">Main View Employer</p>
    <div class="section-nav">
        <a href="#" class="nav-link green-btn">Login</a>
        <a href="#employerProfile" class="nav-link green-btn">Profile</a>
        <a href="#loadFile" class="nav-link green-btn">Reset</a>
    </div>
    <table id ="customers">
  <tr>
    <th>Role Category</th>
    <th>Role</th>
    <th>Location</th>
    <th>Industry</th>
    <th>Function</th>
    <th>Job Title</th>
    <th>Experience</th>
    <th>Salary</th>
    <th>Details/ Apply</th>
  </tr>
  <tr>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
    <td>Test</td>
  </tr>
</table>
    `;
}

function EmployerProfile(){
    return `
    <p class="section-title">Employer Profile</p>
    <div class="section-nav">
        <a href="#mainEmployer" class="nav-link green-btn">Back</a>
    </div>
    <table id ="customers">
        <tr>
            <th>Company Name</th>
            <th></th>
        </tr>
        <tr>
            <td>Company Website:</td>
            <td></td>
        </tr>
        <tr>
            <td>Company Logo:</td>
            <td></td>
        </tr>
        <tr>
            <td>Employer Name:</td>
            <td></td>
        </tr>
        <tr>
            <td>Phone Number:</td>
            <td></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td></td>
        </tr>
        <tr>
            <td>Profile Picture</td>
            <td>Image / File Load Paste</td>
        </tr>
    </table>
    `;
}

function ApplicantProfile(){
    return `
    <p class="section-title">Applicant Profile</p>
    <div class="section-nav">
    <a href="#mainView" class="nav-link green-btn">Back</a>
    </div>
    <table id ="customers">
        <tr>
            <th>Applicant Name</th>
            <th></th>
        </tr>
        <tr>
            <td>Phone Number:</td>
            <td></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td></td>
        </tr>
        <tr>
            <td>Profile Picture</td>
            <td></td>
        </tr>
        <tr>
            <td>CV:</td>
            <td>Image / File Load Paste</td>
        </tr>
    </table>
    `;
}

function AddEditJobView(){
    return `
    <p class="section-title">Add/ Edit Job</p>
    <div class="section-nav">
        <a href="#mainEmployer" class="nav-link green-btn">Save</a>
        <a href="#mainEmployer" class="nav-link green-btn">Back</a>
    </div>
    <table id ="customers">
        <tr>
            <th>Company Name</th>
            <th></th>
        </tr>
        <tr>
            <td>Role Category</td>
            <td>Drop Down</td>
        </tr>
        <tr>
            <td>Role:</td>
            <td></td>
        </tr>
        <tr>
            <td>Location:</td>
            <td>Combi Box</td>
        </tr>
        <tr>
            <td>Industry</td>
            <td></td>
        </tr>
        <tr>
            <td>Function</td>
            <td></td>
        </tr>
        <tr>
            <td>Title</td>
            <td>Image / File Load Paste</td>
        </tr>
        <tr>
            <td>Experience</td>
            <td></td>
        </tr>
        <tr>
            <td>Salary</td>
            <td></td>
        </tr>
    </table>
    `;
}

function DisplayJobView(){
    return `
    <p class="section-title">Job Display</p>
    <div class="section-nav">
        <a href="#" class="nav-link green-btn">Apply</a>
        <a href="#mainView" class="nav-link green-btn">Back</a>
    </div>
    <table id ="customers">
        <tr>
            <th>Company Name</th>
            <th></th>
        </tr>
        <tr>
            <td>Role Category</td>
            <td>Drop Down</td>
        </tr>
        <tr>
            <td>Role:</td>
            <td></td>
        </tr>
        <tr>
            <td>Location:</td>
            <td>Combi Box</td>
        </tr>
        <tr>
            <td>Industry</td>
            <td></td>
        </tr>
        <tr>
            <td>Function</td>
            <td></td>
        </tr>
        <tr>
            <td>Title</td>
            <td>Image / File Load Paste</td>
        </tr>
        <tr>
            <td>Experience</td>
            <td></td>
        </tr>
        <tr>
            <td>Salary</td>
            <td></td>
        </tr>
    </table>
    `;
}

function SectionNotFoundContent(){
    return `
    <p class="section-title">Section was not found. Please Select a Section</p>
    <div class="section-nav">
        <a href="#loadFile" class="nav-link green-btn">Load File</a>
    </div> `;
}