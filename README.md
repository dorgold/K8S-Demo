# Demo

* Single pod
```
kubectl create -f pod.yaml
kubectl port-forward my-pod 9000:8080
kubectl delete pod my-pod
```

* Deployment
```
kubectl create -f deployment.yaml
kubectl get deployments -o wide --watch
kubectl scale deployment/deploy-example --replicas=5
kubectl set image deployment/deploy-example demo-container=dorgold/k8s-demo:v2
```


* Service
```
kubectl create -f service.yaml
kubectl get services --watch
kubectl port-forward svc/my-service 9000:80
kubectl apply -f service.yaml
```
