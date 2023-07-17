## React component to crop, reduce, and display image uploads

- drag/drop or use file input to select image 
- crop the image to a square from its center
- reduce image size 
- display image preview 
- emit the [dataUrl](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) and a blob of the cropped image via the `onLoad` callback

---

```bash
npm i crshmk/uploader
```

```javascript
import Uploader from 'uploader'
// setup for css modules
import 'node_modules/uploader/dist/index.css'

const user = { avatar: 'http://site.co/current-image.jpg' }

const onLoadAvatar = ({ blob, dataUrl }) => {}

<Upload onLoad={onLoadAvatar} currentUrl={user.avatar} />
```

Style by overriding the css 
```css
.my-container .uploader {
  width: 250px;
}
```

The `onLoad` callback is handed a [dataUrl](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) and a [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from the cropped image. 

The `dataUrl` can be posted as `application/json`, or the `blob` can be posted as `multipart/form-data`.

---

Because browsers open dropped files in a new tab, it can be useful to disable drag events on pages with a dropzone smaller than the entire page. The `Upload` component disables such behavior while it is mounted. You may also find the need to manually grab [these](https://github.com/crshmk/uploader/blob/master/src/disableDragDrop.js) event handlers and stick them in your utils:
```javascript
import { disableDragDrop, enableDragDrop } from 'wherever'

useEffect(disableDragDrop, [])
```

--- 


With included css:

<img src="https://github.com/crshmk/uploader/blob/master/example.png" width="300" />

example uploaded image:


<img src="https://github.com/crshmk/uploader/blob/master/sample-upload.png" width="300" />


example image cropped to square aspect ratio and reduced in size:


<img src="https://github.com/crshmk/uploader/blob/master/sample-crop.png" width="300" />

---

### Crop config 

The square cropping could easily be adjusted by exposing some `aspectRatio` prop and adjusting it [here](https://github.com/crshmk/uploader/blob/master/src/Uploader/DropTarget/crop/createCanvas/getDimensions.js). 
