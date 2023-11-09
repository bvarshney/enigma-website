import { useEffect, useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRouter } from 'next/router';
import { Cursor } from "./../../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import LazyVideo from "./LazyBgVideo";

export default function ContactUs({props}) {
  // Create a ref to the dropdown element
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(1);
    const router = useRouter();
    const totalSteps = 6; // Define the total number of steps
    const [attemptedSubmitName, setAttemptedSubmitName] = useState(false); // New state variable
    const [attemptedSubmitService, setAttemptedSubmitService] = useState(false);
    const [attemptedSubmitContact, setAttemptedSubmitContact] = useState(false);
    const [messageStatus, setMessageStatus] = useState(null);  
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
    const [attemptedSubmitBudget, setAttemptedSubmitBudget] = useState(false);
    const [attemptedSubmitOrgName, setAttemptedSubmitOrgName] = useState(false);
    const [attemptedSubmitRole, setAttemptedSubmitRole] = useState(false);
  
    // User information
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    // Service information
    const [selectedService, setSelectedService] = useState("Select Service");
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false); // Add this state variable
    const serviceOptions = ["Select Service","UI-UX", "Website", "Marketing", "Branding"];
  
    // Contact information
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [orgName, setOrgName] = useState("");
    const [role, setRole] = useState("");
  
    // File and message
    const [filePath, setFilePath] = useState(null);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [fileErrorMessage, setFileErrorMessage] = useState(""); // New state variable for file error message
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
    const [isFileSelected, setIsFileSelected] = useState(false);
  
  // Valid Email
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Budget Selector
  const [selectedBudget, setSelectedBudget] = useState("");
  const [budgetRangeText, setBudgetRangeText] = useState("");
  const budgetRanges = [
    "0 $",
    "1-10k $",
    "10k-25k $",
    "25k-50k $",
    "50k-100k $",
    "Above 100k $",
  ];
  // Create a mapping object
const budgetRangeMapping = {
  0: "0 $",
  1: "0-10k $",
  2: "10k-25k $",
  3: "25k-50k $",
  4: "50k-100k $",
  5: "Above 100k $",
};

const handleBudgetChange = (value) => {
  setSelectedBudget(value);
  setBudgetRangeText(budgetRangeMapping[value]);
};
  
  const nextStep = () => {
      if (step === 1) {
        if (firstName === "") {
          setAttemptedSubmitName(true);
        } else {
          setAttemptedSubmitName(false);
          setStep(step + 1);
        }
      } else if (step === 2) {
          if (!isValidPhoneNumber(phoneNumber)) {
            setAttemptedSubmitContact(true);
            // Set an appropriate error message for an invalid phone number
            setPhoneNumberErrorMessage("Phone number is not valid.");
          } else if (phoneNumber === "") {
            setAttemptedSubmitContact(true);
            // Clear any previous error message for phone number
            setPhoneNumberErrorMessage("");
          } else {
            setAttemptedSubmitContact(false);
            setStep(step + 1);
            // Clear any previous error message for phone number
            setPhoneNumberErrorMessage("");
          }
      } else if (step === 3) {
        if (selectedService === "Select Service") {
          setAttemptedSubmitService(true);
        } else {
          setAttemptedSubmitService(false);
          setStep(step + 1);
        } 
      } else if (step === 4) {
        if (selectedBudget === "0") {
          setAttemptedSubmitBudget(true);
        } else {
          setAttemptedSubmitBudget(false);
          setStep(step + 1);
        } 
      } else if (step === 5) {
        if (orgName === "" || role === "") {
          setAttemptedSubmitOrgName(true);
        } else {
          setAttemptedSubmitOrgName(false);
          setStep(step + 1);
        } 
      }
    };
    
    const prevStep = () => {
      setStep(step - 1);
    };
  
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
  
      if (selectedFile) {
        // Check if the selected file type is allowed
        if (isValidFileType(selectedFile)) {
          // Check if the file size is within the limit
          if (selectedFile.size <= MAX_FILE_SIZE) {
          setFile(selectedFile);
          setIsFileSelected(true);
          setFileErrorMessage("");
        } else {
          setFileErrorMessage("File size exceeds the limit of 10MB.");
        }
      }
       else {
        setFileErrorMessage("Invalid file type. Please select a pdf, docx, or pptx file.");
        }
      } else {
        // If no file is selected, clear the file and reset the flag
        setFile(null);
        setIsFileSelected(false);
        event.target.value = ""; // Reset the file input value
      }
    };
  
    const handleFileRemove = () => {
      // Clear the file and reset the flag
      setFile(null);
      setIsFileSelected(false);
      document.getElementById("attach").value = ""; // Reset the file input value
    };
  
    const isValidFileType = (file) => {
      const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation"];
      return allowedTypes.includes(file.type);
    };
  
  const handleFileUpload = async () => {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
    
        try {
          // Send the file to the server
          const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
    
          if (response.ok) {
            const responseData = await response.json();
            const { filePath } = responseData;
            return filePath; // Return the file path
          } else {
            alert("File upload failed. Please try again later.");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    
      return null; // No file path if no file is selected
    };
    
    const handleSubmit = async () => {
      setIsLoading(true);
      // Initialize a formData object to send data to the server
      const formData = new FormData();
  
      // Add user information to the formData
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("selectedService", selectedService);
      formData.append("selectedBudget", selectedBudget);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("orgName", orgName);
      formData.append("role", role);

      // Check if a file is selected
      const uploadedFilePath = await handleFileUpload();
  
      if (uploadedFilePath !== null) {
          // Add the file URL to the formData
          formData.append("fileUrl", uploadedFilePath);
        }
  
      // Add the message to the formData
      formData.append("message", message);
  
      try {
        // Send the formData to the server for email sending
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Name: ${firstName} ${lastName}
                    \nConatct Number: ${phoneNumber}
                    \nEmail: ${email}
                    \nRequested Service: ${selectedService}
                    \nBudget Range: ${budgetRangeText}
                    \nOrganisation Name: ${orgName}
                    \nYour Role: ${role}
                    \nFile Url: ${uploadedFilePath}
                    \nMessage: ${message}`,
          }),
        });
  
        if (response.ok) {
          setMessageStatus('success');
          setTimeout(() => {
            router.push('/thank-you');
          }, 1000);
        } else {
          setMessageStatus('error');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setMessageStatus('error');
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsServiceDropdownOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <>
  {/* Main Contact Form Start */}
  
  <div className="popUpFormContainer">
    <LazyVideo
      src="/assets/contact/bg.webm"
      title="PopUp Form BG Video" />
        
  {/* Form Step 1 */}
  {step === 1 && (
    <div className="form-sections">
      
      <div className="popUp-form-step">
        <h5 ref={inputRef}>
          <span className="color-primary">01</span> / 06
        </h5>
      </div>
  
      <div>
        <h1 ref={inputRef}>Hi
          <span className="color-primary"> There!</span>
        </h1>
        <p>What is Your Name?</p>
      </div>

      <div className="popUp-content-flex">
      <div className="popUp-form-content">
        <div className="pop-up-div-form">
          <input className="name-input-form"
            type="text"
            ref={inputRef}
            name="fname"
            placeholder="First Name*"
            value={firstName}
            onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
            onChange={(e) => setFirstName(e.target.value)}
            
          />
            {attemptedSubmitName && firstName === "" && (
              <p className="error">Please enter your name.</p>
            )}  
        </div>
        <div className="pop-up-div-form">
          <input className="name-input-form"
            type="text"
            ref={inputRef}
            name="lname"
            placeholder="Last Name"
            value={lastName}
            onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

        <div className="form-button" ref={inputRef}>    
          <button
            type="button"
            onClick={nextStep}
          >
          <span>
            Next
          </span>
          <img src="/assets/icons/next.png" alt="next button icon"/>
          </button>
        </div>
      </div>
      </div>
    )}

{/* Form Step 1 END*/}
  
{/* Form Step 2 */}
  {step === 2 && (
  <div className="form-sections">
    <div className="popUp-form-step">
      <h5>
        <span className="color-primary">02</span> / 06
      </h5>
    </div>
    
    <div className="step2">
      <h1>Nice to meet you,
        <span className="color-primary capitalize"> {firstName}!</span>
      </h1>
      <p>Please provide your contact information?</p>
    </div>
    
    <div className="popUp-content-flex step2">
      <div className="popUp-form-content step2">
        <div>
          <PhoneInput
            type="text"
            name="number"
            international
            defaultCountry="US"
            placeholder="Your Number*"
            countryCallingCodeEditable={false}
            onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
            value={phoneNumber}
            error={!phoneNumber ? 'Please enter your number.' : !isValidPhoneNumber(String(phoneNumber)) ? 'Phone number is not valid' : undefined}
            onChange={(value) => setPhoneNumber(value)}
          />
          {attemptedSubmitContact && phoneNumber === "" && (
            <p className="error">Phone number is required</p>
          )}
          {attemptedSubmitContact && phoneNumber && !isValidPhoneNumber(String(phoneNumber)) && (
            <p className="error">Phone number is not valid</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
            value={email}
            onChange={(e) => {setEmail(e.target.value);
            setIsEmailValid(emailRegex.test(e.target.value));
            }}
          />
          {attemptedSubmitContact && email === "" && (
              <p className="error">Please enter your email.</p>
          )}
          {!isEmailValid && (
              <p className="error">This email looks a bit weird.</p>
          )}
          </div>
      </div>


      <div className="back-button">
        <div 
            data-cursor-size="60px"
            data-cursor-exclusion>
          <button
              type="button"
              onClick={prevStep}
            >
            <img src="/assets/icons/arrow-back.png" />
          </button>
        </div>
      </div>

        <div className="form-button">    
          <button
              type="button"
              onClick={nextStep}
          >
          <span>
            Next
          </span>
          <img src="/assets/icons/next.png" />
          </button>
        </div>
      </div>
  </div>
  )}
{/* Form Step 2 END*/}


{/* Form Step 3 */}
  {step === 3 && (
  <div className="form-sections">
    <div className="popUp-form-step">
      <h5>
        <span className="color-primary">03</span> / 06
      </h5>
    </div>
    <div>
      <h1>Superb, <span className="color-primary">{firstName}!</span></h1>
      <p>What can we help you with?</p>
    </div>
    
    <div className="popUp-content-flex step3">
    <div className="popUp-form-content step3">
          <div className={`dropdown ${attemptedSubmitService && selectedService === "Select Service" ? "error" : ""}`} 
                ref={dropdownRef}>
            <div
              onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
              onClick={() => {
                setIsServiceDropdownOpen(!isServiceDropdownOpen);
              }}
              className="dropdown-btn"
            >
              {selectedService}
              <span
                className={isServiceDropdownOpen ? "fa fa-caret-up" : "fa fa-caret-down"}
              />
            </div>
            <div
              className="dropdown-content"
              onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
              style={{ display: isServiceDropdownOpen ? "block" : "none" }}
            >
              {serviceOptions.map((option) => (
                <div
                  onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
                  key={option}
                  onClick={() => {
                    setSelectedService(option);
                    setIsServiceDropdownOpen(false);
                  }}
                  className="item"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          {attemptedSubmitService && selectedService === "Select Service" && (
            <p className="error">Please select a service.</p>
          )}
        </div>
  
  {/* Button step 3 */}
      <div className="back-button">
        <div 
            data-cursor-size="60px"
            data-cursor-exclusion>
          <button
              type="button"
              onClick={prevStep}
            >
            <img src="/assets/icons/arrow-back.png" />
          </button>
        </div>
      </div>

      <div className="form-button">    
        <button
            type="button"
            onClick={nextStep}
        >
          <span>
            Next
          </span>
          <img src="/assets/icons/next.png" />
        </button>
      </div>
    </div>
        
  </div>
  )}  
{/* Form Step 3 END*/}

{/* Form Step 4 */}
{step === 4 && (
  <div className="form-sections">
    <div className="popUp-form-step">
      <h5>
        <span className="color-primary">04</span> / 06
      </h5>
    </div>

    

    <div className="popUp-content-flex step4">
    <div>
      <p>What's your budget range for this project?</p>
    </div>
    <div className="budget-slider-container">
      <input
        onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
        type="range"
        min="0"
        max="5"
        step="1"
        value={selectedBudget}
        onChange={(e) => handleBudgetChange(e.target.value)}
        className="budget-slider"
      />
      <h3>
        Approximate Budget
      </h3>
      <div className="budget-range">{budgetRanges[selectedBudget]}</div>
      {attemptedSubmitBudget && selectedBudget === "0" && (
        <p className="error">Please select a budget range.</p>
      )}
    </div>

{/* Button step 4 */}
      <div className="back-button">
        <div 
            data-cursor-size="60px"
            data-cursor-exclusion>
          <button
              type="button"
              onClick={prevStep}
            >
            <img src="/assets/icons/arrow-back.png" />
          </button>
        </div>
      </div>

    <div className="form-button">    
      <button
          type="button"
          onClick={nextStep}
      >
      <span>
        Next
      </span>
      <img src="/assets/icons/next.png" />
      </button>
    </div>
    </div>

  </div>
)}
{/* Form Step 4 END*/}

{/* Form Step 5 */}
{step === 5 && (
  <div className="form-sections">
    <div className="popUp-form-step">
      <h5>
        <span className="color-primary">05</span> / 06
      </h5>
    </div>

  <div className="popUp-content-flex step5"> 
    <div>
      <p>What organisation do you work with?</p>
      <div className="pop-up-div-form mt-5">
        <input
          onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
          type="text"
          name="oname"
          placeholder="Your Organisation*"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
      </div>
    </div>

    <div>
      <p>What's your role there?</p>
      <div className="pop-up-div-form mt-5">
        <input
          type="text"
          onKeyDown={(e) => { if (e.key === 'Enter') {nextStep();}}}
          name="role"
          placeholder="Your Role*"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        {attemptedSubmitOrgName && orgName === "" || role === "" && (
        <p className="error">Please fill above details.</p>
      )}
      </div>
    </div>

    <div className="back-button">
        <div 
            data-cursor-size="60px"
            data-cursor-exclusion>
          <button
              type="button"
              onClick={prevStep}
            >
            <img src="/assets/icons/arrow-back.png" />
          </button>
        </div>
      </div>
  
    <div className="form-button">    
      <button
        type="button"
        onClick={nextStep}
      >
      <span>
        Next
      </span>
      <img src="/assets/icons/next.png" />
      </button>
    </div>
  </div>
  
  </div>
  )}

{/* Form Step 5 END*/}

{/* Form Step 6 */}
  {step === 6 && (
  <div className="form-sections">
    <div className="popUp-form-step">
      <h5>
        <span className="color-primary">06</span> / 06
      </h5>
    </div>

      <div className="popUp-content-flex step6">
      <div>
        <p>Do you have any docs detailing your needs?</p>
      </div>
        <div>
        <div className="form-attach">
          <input
            type="file"
            id="attach"
            name="myFile"
            accept=".pdf,.docx,.pptx"
            onChange={handleFileChange}
            hidden
          />
          <button>
            <label className="label" htmlFor="attach">
              <img src="/assets/icons/attach.png" />
              Attach File
            </label>
          </button>
          {isFileSelected ? (
            <span id="file-chosen">
              {file ? file.name : "No file chosen"}
              <button onClick={handleFileRemove}>✖</button>
            </span>
          ) : (
            <span id="file-chosen">No file chosen</span>
          )}
          <div className="mt-3">
            <p className="terms">* Only .pdf, .ppt & .doc is allowed. Max file size is 10 Mb.</p>
          </div>
          {fileErrorMessage && <p className="error">{fileErrorMessage}</p>}
        </div>

        <div className="popUp-for-TextArea">
            <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        </div>
        

        <div className="back-button">
        <div 
            data-cursor-size="60px"
            data-cursor-exclusion>
          <button
              type="button"
              onClick={prevStep}
            >
            <img src="/assets/icons/arrow-back.png" />
          </button>
        </div>
      </div>
            <div className='form-button-2'>
            
            {isLoading ? (
                <div className="loading-state">
                  <img src="/assets/icons/loading.svg"/>
                </div>
              ) : (
                <button className='btn_CTA' onClick={handleSubmit}>
                  <span className="btn_CTA-ripple">
                    <span></span>
                  </span>
                  <span className='btn_CTA-title'>
                    <span data-text='Submit'>Submit</span>
                  </span>
                </button>
              )}
          
            {messageStatus === 'success' && (
            <p className="text-green-400">Thank you, your details have been submitted.</p>
            )}
            {messageStatus === 'error' && (
              <p className="error">Failed to send the message. Please try again later.</p>
            )}
        </div>
      </div>
    </div>
      )}
{/* Form Step 6 END*/}

      </div>
      </>
      
    );
  }