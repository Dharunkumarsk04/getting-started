node {

    cleanWs()
    
    stage('Clone repository') {
            checkout scm 
      }
    
    stage('Build Image'){
        try{
            sh "docker build -t docker/getting-started .| tee build.log"
            }catch(e){
//                 def error = "${e}"
//                 echo $error
            echo 'Err: Incremental Build failed with Error: ' + e.toString()
            }
      }
}
