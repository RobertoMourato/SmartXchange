# Changelog Template
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Types of changes

- **Added**  for new features.
- **Changed** for changes in existing functionality.
- **Deprecated** for soon-to-be removed features.
- **Removed** for now removed features.
- **Fixed** for any bug fixes.
- **Security** in case of vulnerabilities.


# Example

## Sprint X - YYYY-MM-DD 
### Added 
- New feature. #[issue number] 

### Changed
- Change. #[issue number] .

### Fixed
- bug fix. #45[issue numer] .


## Sprint 1 - 2020-10-20
### Added
- "How to contribute section" in README.md file. #53 
- Added pipeline that allows compilation in the repository. #54
- Database created and running locally. #58
- Back-end server created and deployed. #59, #54

### Changed
- Updated interface mockups #61


## Sprint 2 - 2020-11-10 
In this sprint we established the final version of the database model aproved by the PO. We have the sequelize migrations and nodeJS models for the two types of tenants (super-admin and manager), users, company and competition. Users can now authenticate themselfs. There is the possibility for managers to invite users by email. For the front-end we developed pages related to the Super-Admin interface and default Nav bar. In terms of Security we fixed the pipeline so it's no longer broken.

### Added 
- Create queries to populate Tenants. #66
- Create queries to populate User. #67
- Created queries to populate Comptetitions. #68
- Created queries to populate Companies. #70
- Created main nav-bar. #65
- Added option to invite users and managers. #75
- Created method to autenticate users. #76
- Created page to list managers. #55
- Added invite manager pop-up. #73

### Changed
- Updated database attributes and tables. #71

### Fixed
- Fixed pipeline (ENOENT err). #77 




