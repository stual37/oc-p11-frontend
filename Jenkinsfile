pipeline {
  
    agent any
    
    tools{
      nodejs 'NodeJS-21.5'
    }
    
    environment {
        CI = 'true'
    }  
  
    stages {
    
        stage('Install') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/stual37/oc-p11-frontend.git'
                sh 'npm install'
            }
        }
         
        stage('Start') {
          steps {
            sh 'npm start'
          }
        }  
        
        stage('Test') {
          steps {
            sh 'npm run test'
          }
        }
        
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }  
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo 'I succeeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}
