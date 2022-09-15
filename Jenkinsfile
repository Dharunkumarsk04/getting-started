node {

    cleanWs()
    
    stage('Clone repository') {
            checkout scm 
      }
    
    stage('Build Image'){
        try{
            sh "npm i puppeteer --save"
//             sh "npm install puppeteer-chromium-resolver"
//             sh "npm install chromium"
            sh "apt-get install libatk-bridge2.0-0"
            sh "docker build -t docker/getting-started .| tee build.log"
            sh "node code.js"
            }catch(e){
//                 def error = "${e}"
//                 echo $error
                  echo 'Err: Incremental Build failed with Error: ' + e.toString()
            }
      }
}
