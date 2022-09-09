node {

    cleanWs()
    
    stage('Clone repository') {
            checkout scm 
      }
    
    stage('Build Image'){
        try{
            sh "npm i puppeteer"
            sh "docker build -t docker/getting-started .| tee build.log"
            sh "node code.js"
            }catch(e){
//                 def error = "${e}"
//                 echo $error
            echo 'Err: Incremental Build failed with Error: ' + e.toString()
            }
      }
}
