# Final Project Ideas

## Auto Fill PR Contents

### 형식

Github Actions

### 설명

#### 개요

Pull Request를 생성할 때, commit message를 잘 작성해두었다면 PR 내용에 해당 메시지들을 그대로 옮겨적는 경우가 많았다. 이 과정이 상당히 귀찮았던 경험이 있어, commit message를 기반으로 하여 PR 내용을 자동으로 채워주면 편하지 않을까 라는 생각이 들었다.

#### 사용법

angular commit convention 등의 특정 commit convention을 지키는 프로젝트라면 branch push 시에 commit 내역을 파싱, commit message를 기반으로 PR 내용을 자동으로 채워준다.

예시)

- 커밋 내역

```bash
feat: 리스트 구현
feat: 사용자 정보 받아오기
fix: 스타일 수정
```

- Output PR Content (markdown)

```markdown
## New Features

- 리스트 구현
- 사용자 정보 받아오기

## Fixes

- 스타일 수정
```

### 필요 기술 스택

Javascript (or Python), Github API, Github Actions

## PR Reviewer Random Assigner

### 형식

Github Actions or Github App

### 설명

#### 개요

Pull Request를 생성할 때 리뷰어를 매번 직접 지정하지 않고 목록에서 랜덤으로 배정해주는 과정이 자동으로 있으면 좋겠다는 생각을 했다.

#### 사용법

특정 label에 랜덤으로 배정될 organization의 멤버들을 설정해 놓고 PR을 작성할 때 해당 label을 설정하면 그 목록에서 랜덤으로 인원을 선정해서 reviewer로 배정해준다.

### 필요 기술 스택

Javascript (or Python), Github API, Github Actions