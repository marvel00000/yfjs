(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// Armenian (hy)
    plupload.addI18n({
        "Stop Upload": "Կանգնեցնել",
        "Upload URL might be wrong or doesn't exist.": "Ավեցաված URL-ը սխալ է կամ գոյություն չունի։",
        "tb": "տբ",
        "Size": "Չափ",
        "Close": "Փակել",
        "Init error.": "Ստեղծման սխալ",
        "Add files to the upload queue and click the start button.": "Ավելացրեք ֆայլեր ցուցակում և սեղմեք \"Վերբեռնել\"։",
        "Filename": "Ֆայլի անուն",
        "Image format either wrong or not supported.": "Նկարի ֆորմատը սխալ է կամ չի ընդունվում։",
        "Status": "Կարգավիճակ",
        "HTTP Error.": "HTTP սխալ",
        "Start Upload": "Վերբեռնել",
        "mb": "մբ",
        "kb": "կբ",
        "Duplicate file error.": "Ֆայլի կրկնման սխալ",
        "File size error.": "Ֆայլի չափի սխալ",
        "N/A": "N/A",
        "gb": "գբ",
        "Error: Invalid file extension:": "Սխալ։ Ֆայլի ընդլայնումը սխալ է։",
        "Select files": "Ընտրեք ֆայլերը",
        "%s already present in the queue.": "%s ֆայլը արդեն ավելացված է ցուցակում.",
        "File: %s": "Ֆայլ: %s",
        "b": "բ",
        "Uploaded %d/%d files": "Վերբեռնվել են %d/%d ֆայլերը",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Վերբեռնիչը միանգամից ըդունում է միայն %d ֆայլ(եր). Ավելորդ ֆայլերը հեռացվել են.",
        "%d files queued": "ցուցակում կա %d ֆայլ",
        "File: %s, size: %d, max file size: %d": "Ֆայլ: %s, չափ: %d, ֆայլի մաքսիմում չափ: %d",
        "Drag files here.": "Տեղափոխեք ֆայլերը այստեղ",
        "Runtime ran out of available memory.": "Օպերատիվ հիշողության անբավարարուտյուն.",
        "File count error.": "Ֆայլերի քանակի սխալ",
        "File extension error.": "Ֆայլի ընդլայնման սխալ",
        "Error: File too large:": "Սխալ։ Ֆայլի չափը մեծ է։",
        "Add Files": "Ավելացնել ֆայլեր"
    });

}));