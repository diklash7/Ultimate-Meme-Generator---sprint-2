var gCurrLang = 'en';

var gTrans = {
    galllery: {
        en: 'Gallery',
        he:'גלריית תמונות'
    },
    about: {
        en: 'About',
        he: 'אודות',
    },
    share: {
        en: 'Share',
        he: 'שיתוף'
    },
    save: {
        en: 'Save',
        he: 'שמירה',
    },
    price: {
        en: 'Price',
        he: 'מחיר הספר',
    },
    img: {
        en: 'Image',
        he: 'תמונה',
    },
    actions: {
        en: 'Actions',
        he: 'פעולות',
    },
    read: {
        en: 'read',
        he: 'קריאה',
    },
    update: {
        en: 'update',
        he: 'עדכון',
    },
    delete: {
        en: 'delete',
        he: 'מחיקה',
    },
    'filter-all': {
        en: 'All',
        es: 'Todos',
        he: 'הכל',
    },
    'filter-active': {
        en: 'Active',
        es: 'Activo',
        he: 'פעיל'
    },
    'filter-done': {
        en: 'Done',
        es: 'Completo',
        he: 'הושלם',
    },
    'stat-todo-label': {
        en: 'Todo',
        es: 'Hacer',
        he: 'לעשות',
    },
    'stat-active-label': {
        en: 'Active',
        es: 'Activo',
        he: 'פעיל',
    },
    add: {
        en: 'Add',
        es: 'Aggregar',
        he: 'הוסף',
    },
    sure: {
        en: 'Are you sure?',
        es: 'Estas Seguru?',
        he: 'בטוח נשמה?',
    },
    'add-todo-placeholder': {
        en: 'What needs to be done?',
        es: 'Que te tienes que hacer?',
        he: 'מה יש לעשות?'
    }
}



function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans.en

    return txt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach((el) => {
        // console.dir(el)
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)
        if (el.nodeName === 'INPUT') {
            // el.setAttribute('placeholder', txt)
            //THE SAME!
            el.placeholder = txt
        } else el.innerText = txt
    })
}

var gLangs = {
    en: 'USD',
    he: 'ILS'
}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat(gCurrLang, { style: 'currency', currency:gLangs[gCurrLang] }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}

function kmToMiles(km) {
    return km / 1.609;
}