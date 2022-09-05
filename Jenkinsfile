node {

    cleanWs()
    
    stage('Clone repository') {
            checkout scm 
      }
    try{
    stage('Build Image'){
            sh "docker build -t docker/getting-started ."
      }
    }catch(e){
        def error = "${e}"
        echo e
    }
    
}
