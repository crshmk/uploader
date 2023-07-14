## React component to crop and display image uploads

```bash
npm i crshmk/uploader
```



- drag/drop or use file input to select image 
- crop the image to a square from its center 
- display image preview 
- emit the [dataUrl](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) of the cropped image via the `onLoad` callback

```javascript
import Uploader from 'uploader'
// the css setup is css modules
import 'node_modules/uploader/dist/index.css'

<Upload onLoad={onSelectAvatar} />
```

Just override the css selectors to style it 
```css
.my-container .uploader {
  width: 200px;
}
```

The `onLoad` callback is handed a [dataUrl](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) and a [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from the cropped image. 
```javascript
const onSelectAvatar = ({ blob, dataUrl }) => {
}

<Upload onLoad={onSelectAvatar} />
```

The `dataUrl` can be posted as `application/json`, or the `blob` can be posted as `multipart/form-data`.

---

The utils to enable and disable default browser previews of dropped files are also exposed. Because browsers open dropped files in a new tab, it can be useful to disable this on pages with a dropzone smaller than the entire page. The `Upload` component disables such behavior while it is mounted.
```javascript
import { disableDragDrop, enableDragDrop } from 'uploader'

useEffect(disableDragDrop, []))
```

--- 


With included css:

<img src="https://github.com/crshmk/uploader/blob/master/example.png" width="300" />

example uploaded image:


<img src="https://github.com/crshmk/uploader/blob/master/sample-upload.png" width="300" />


example cropped image:


<img src="https://github.com/crshmk/uploader/blob/master/sample-crop.png" width="300" />

---


The square cropping could easily be adjusted by exposing some `aspectRatio` prop and adjusting it [here](https://github.com/crshmk/uploader/blob/master/src/Uploader/DropTarget/crop/createCanvas/getDimensions.js). 
