node {

    cleanWs()
    
    stage('Clone repository') {
            checkout scm 
      }
    
    stage('Build Image'){
        try{
            sh "docker build -t docker/getting-started ."
            }catch(Exception e){
                def error = "${e}"
                echo $error
            }
      }
}
