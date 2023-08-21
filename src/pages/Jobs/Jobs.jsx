import React from 'react'

export const Jobs = () => {
    return (
        <>
        <section class="blog-banner">
         <div class="container-fluid">
         <div class="col-md-12">
            
               </div> 
         </div>
      </section>
            <section className="quick">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xll-12">
                            <div className="quick-inner ">
                                <form className="d-flex quick-form" action="/action_page.php">
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Name</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Promo Code" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Company name</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Company name" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Designation</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Designation" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Email
                                        </label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Email Address" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Job Title
                                        </label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Job Title" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Job Description</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Job Description" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Experiences</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Experiences" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Salary Range</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Salary Range" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Mobile Number
                                        </label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Mobile Number" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Loctaion
                                        </label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Loctaion" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Industry</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Industry" name="pswd"/></div>
                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Keyskills</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Keyskills" name="pswd"/></div>
                                    <div className="mb-4  form-grp">
                                        <label for="email" className="form-label">Members From which Industry?</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Members From which Industry?</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>


                                    <div className="mb-4 form-grp">
                                        <label for="pwd" className="form-label">Members From which Skills?
                                        </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Members From which Skills?</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>


                                </form>
                                <button type="submit" className="btn btn-quick">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
