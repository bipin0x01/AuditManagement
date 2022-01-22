# AuditManagement

GETProtected Route - Authorized User
http://192.168.1.71:5000/api/users/clientdetails
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY


Example Request
Protected Route - Authorized User
curl --location --request GET 'http://192.168.1.71:5000/api/users/clientdetails' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY'
POSTLogin
http://192.168.1.71:5000/api/users/login
BODYraw
{
    "email":"test@example.com",
    "password":"123456"
}


Example Request
Login
curl --location --request POST 'http://192.168.1.71:5000/api/users/login' \
--data-raw '{
    "email":"test@example.com",
    "password":"123456"
}'
POSTClient Login
http://192.168.1.71:5000/api/clients/login
BODYraw
{
    "email":"bt.kaji@gmail.com",
    "password":"123456"
}


Example Request
Client Login
curl --location --request POST 'http://192.168.1.71:5000/api/clients/login' \
--data-raw '{
    "email":"bt.kaji@gmail.com",
    "password":"123456"
}'
POSTProtected File Upload
http://192.168.1.71:5000/api/upload/
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY
BODYformdata
clientFile


Example Request
Protected File Upload
curl --location --request POST 'http://192.168.1.71:5000/api/upload/' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY' \
--form 'clientFile=@"/C:/Users/thapa/Downloads/download.jpeg"'
POSTAdd new client
http://192.168.1.71:5000/api/clients
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY
BODYraw
{}


Example Request
Add new client
curl --location --request POST 'http://192.168.1.71:5000/api/clients' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY' \
--data-raw '{}'
GETList all clients
http://192.168.1.71:5000/api/clients
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY


Example Request
List all clients
curl --location --request GET 'http://192.168.1.71:5000/api/clients' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY'
GETList all auditors
http://192.168.1.71:5000/api/clients
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY


Example Request
List all auditors
curl --location --request GET 'http://192.168.1.71:5000/api/clients' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY'
GETList single client details
http://192.168.1.71:5000/api/clients
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY


Example Request
List single client details
curl --location --request GET 'http://192.168.1.71:5000/api/clients' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY'
PUTUPDATE Single Client Info
http://192.168.1.71:5000/api/clients/615f3160115e7252ad6f59fc
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY
BODYraw
{
    "_id": "615f3160115e7252ad6f59fc",
    "user": "615ee486feabad60ea74467f",
    "name": "Bipin Tha",
    "email": "email@emai.com",
    "address": "Da",
    "registrationNumber": "2134123123"
}


Example Request
UPDATE Single Client Info
View More
curl --location --request PUT 'http://192.168.1.71:5000/api/clients/615f3160115e7252ad6f59fc' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY' \
--data-raw '{
    "_id": "615f3160115e7252ad6f59fc",
    "user": "615ee486feabad60ea74467f",
    "name": "Bipin Tha",
    "email": "email@emai.com",
    "address": "Da",
    "registrationNumber": "2134123123"
}'
DELDELETE a client
http://192.168.1.71:5000/api/clients/615f3160115e7252ad6f59fc
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY


Example Request
DELETE a client
curl --location --request DELETE 'http://192.168.1.71:5000/api/clients/615f3160115e7252ad6f59fc' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY'
DELDELETE a client Copy
http://192.168.1.71:5000/api/clients/615f3160115e7252ad6f59fc
HEADERS
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWVlNDg2ZmVhYmFkNjBlYTc0NDY3ZiIsImlhdCI6MTYzMzYwOTIzNSwiZXhwIjoxNjM2MjAxMjM1fQ.nL_HjZwC-IgzAcEHlCgIyzCpec6iBdaj-fCxYNqVFaY
