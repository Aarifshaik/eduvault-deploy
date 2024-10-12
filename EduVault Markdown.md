# EduVault System Architecture
=====================================


## Users
---------
### 👥

* **Student** 👨‍🎓
* **Teacher** 👩‍🏫
* **Admin** 👩‍💼


## Frontend (React)
-------------------
### 📱

* **Login/Registration** 🔒
* **Resource List/Detail** 📚
* **Search Bar** 🔍
* **Filter Components** 🗂️
* **User Profile** 👥
* **Admin Dashboard** 📊


## Backend (Spring)
-------------------
### 🔩

* **Authentication Service** 🔒
 + 👥 User Management
 + 🔑 Role-Based Access Control
* **Resource Service** 📚
 + 📄 Resource Upload/Management
 + 🔍 Search Functionality
* **Search Service** 🔍
 + 📊 Search Query Processing
 + 🔑 Filtering
* **Access Control Service** 🔒
 + 👥 Role Management
 + 🔑 Permission Management
* **Feedback Service** 💬
 + 👥 User Feedback Collection
 + 📊 Analytics


## Database (MySQL)
-------------------
### 🗂️

* **Users Table** 👥
* **Resources Table** 📚
* **Resource Categories Table** 🗂️
* **Feedback Table** 💬
* **Downloads Table** 📊
* **Access Control Table** 🔒


## Interactions
----------------

* 👥 Users interact with Frontend
* Frontend interacts with Backend via RESTful APIs
* Backend interacts with Database for storage and retrieval


## Roles and Responsibilities
---------------------------

### User Roles

#### Student
* Search resources
* Access resources
* Provide feedback

#### Teacher
* Upload resources
* Manage resources
* Monitor feedback

#### Admin
* Manage users
* Manage resources
* Monitor analytics


## Legend
--------

* 👥: Users
* 📱: Frontend
* 🔩: Backend
* 🗂️: Database
* 🔒: Authentication
* 🔑: Access Control
* 🔍: Search
* 📊: Analytics