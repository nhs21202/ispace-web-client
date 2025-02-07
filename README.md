# Web template clone

## Getting Started

First, run the development server:

## Getting started

Start development

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Config project

- Update project config by find `TODO [config]`
- Update UI pages with `TODO [page]` notes
- All api is located in `src/api`
- All local image store at `public/images`

## Function helper

#### Page section convert

```
src/utilities/helper/pageSection.helper.ts
```

| PageSectionType | Function helper                         |
| --------------- | ----------------------------------------|
| textAndImage    | getTextAndImageData(list, sectionKey);  |
| carousel        | getCarouselData(list, sectionKey)       |
| posts           | getPostData(list, sectionKey, extra)    |
| products        | getProductData(list, sectionKey, extra) |
| map             | getMapData(list, sectionKey)            |

_Notes_

- list: get from api `getPageSectionBySlug(slug)`
- sectionKey: get in config of admin page
- extra: slug config from admin page for product and post page (optional)
- formKey: get in config of admin page

#### Form find field 

```
src/utilities/helper/form.helper.ts
```

| Criteria | Function helper                  |
| -------- | -------------------------------- |
| type     | getFieldByType(formDetail, type) |
| key      | getFieldByKey(formDetail, key)   |

_Notes_

- formDetail: get from api `getFormByKey(formKey)`