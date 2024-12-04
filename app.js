const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));  // Serve static files from 'public' directory

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Project Guide</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </head>
        <body>
            <div class="container">
                <h1 class="mt-5">Node.js Deployment Guide</h1>
                <div class="accordion mt-3" id="guideAccordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What We Did
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#guideAccordion">
                            <div class="card-body">
                                Provisioned an EC2 instance with Terraform, configured the server using Ansible, and deployed a Node.js app with GitHub Actions.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How We Did It
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#guideAccordion">
                            <div class="card-body">
                                We used Terraform for infrastructure provisioning, Ansible for server configuration, and GitHub Actions for CI/CD deployment.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Outcomes
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#guideAccordion">
                            <div class="card-body">
                                Successfully deployed a production-grade Node.js application using modern DevOps practices.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
