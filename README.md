## React component to prepare files to upload 

- drag/drop or use file input to upload image 
- crop the image to a square from its center 
- display as avatar
- emit the [dataUrl](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) of the cropped image via the `onLoad` callback

```javascript
import Uploader from 'uploader'

<Upload onLoad={onSelectAvatar} />
```

The `onLoad` callback is handed the [dataUrl](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) string for the cropped image. It can be used as an image `src` attribute or a payload to save the cropped image.
> data:image/png;base64,iVBORw0KGgoAAAANSUh...
---

The utils to enable and disable default browser previews of dropped files are also exposed. Because browsers open dropped files in a new tab, it can be useful to disable this on pages with a dropzone smaller than the entire page. The `Upload` component disables such behavior while it is mounted.
```javascript
import { disableDragDrop, enableDragDrop } from 'uploader'

useEffect(disableDragDrop, []))
```

--- 


With example css:

<img src="https://github.com/crshmk/uploader/blob/master/example.png" width="300" />

example uploaded image:


<img src="https://github.com/crshmk/uploader/blob/master/sample-upload.png" width="300" />


example cropped image:


<img src="https://github.com/crshmk/uploader/blob/master/sample-crop.png" width="300" />

---

### Setup 

No styling is bundled in the build. The [example](https://github.com/crshmk/uploader/tree/master/example) folder provides a css module and background image to create the examples above. 
