# Welcome to api-booking!

API REST for the application in REACT booking


# Diagram
The application follows the path below:

```mermaid
graph LR
A[booking REACT] -- 1 --> B[api-booking / routes / Express]
B --2--> C[Controller / Express]
C --3--> D(Mongoose Model)
C --6--> A
D --5--> C
D --4--> E[Mongo DB]