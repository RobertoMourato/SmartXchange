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

## Sprint X - YYYY-DD-MM 
### Added 
- New feature. #[issue nยบ] 

### Changed
- Change, #39.

### Fixed
- bug fix, #45.

# Example
## Sprint 1 - 2020-10-01
### Added
- `.gitattributes`, force unix eol under windows, for development.

### Changed
- Bumped `linkify-it` to 3.0.0, #661 + allow unlimited `.` inside links.
- Dev deps bump.
- Switch to `nyc` for coverage reports.
- Partially moved tasks from Makefile to npm scripts.
- Automate web update on npm publish.

### Fixed
- Fix em- and en-dashes not being typographed when separated by 1 char, #624.
- Allow opening quote after another punctuation char in typographer, #641.
- Assorted wording & typo fixes.

### Security
- Fix quadratic parse time for some combinations of pairs, #583. Algorithm is
  now similar to one in reference implementation.
