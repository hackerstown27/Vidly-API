node("slave1") {
    stage('SonarQube analysis') {
        def scannerHome = tool 'SonarQube-Scanner';
        def projectKey = 'demo';
        withSonarQubeEnv('SonarQube') {
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=${projectKey} -Dsonar.projectBaseDir=${WORKSPACE}"
        }
        timeout(time: 1, unit: 'HOURS') {
            def qg = waitForQualityGate();
            if (qg.status != 'OK') {
              error "Pipeline aborted due to quality gate failure: ${qg.status}"
            }
        }
    }
}
// pipeline {
//     agent { label 'slave1' }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'echo "Building Image"'
//             }
//         }
//         stage('Push') {
//             steps {
//                 sh 'echo "Pushing Image"'
//                 sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 141544557735.dkr.ecr.ap-south-1.amazonaws.com'
//                 sh 'docker tag $SRC_IMG:latest 141544557735.dkr.ecr.ap-south-1.amazonaws.com/poc-internship:poc-$BUILD_NUMBER'
//                 sh 'docker push 141544557735.dkr.ecr.ap-south-1.amazonaws.com/poc-internship:poc-$BUILD_NUMBER'
//             }
//         }
//         stage('Scan') {
//             steps {
//                 sh 'echo "Scaning Image"'
//                 build job: 'ECR-Scan', 
//                 parameters: [[$class: 'StringParameterValue', name: 'REPO_NAME', value: 'poc-internship'], [$class: 'StringParameterValue', name: 'TRG_IMG', value: 'poc-' + String.valueOf(BUILD_NUMBER)]]
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sh 'echo "Deploying Image to Kubernetes"'
//             }
//         }
//     }
// }
