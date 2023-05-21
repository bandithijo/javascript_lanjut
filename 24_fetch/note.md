# 24 fetch

Sebuah API pada JavaScript modern yang tugasnya untuk mengambil data secara asynchronous atau ajax, sama seperti ketika kita melakukan XMLHttpRequest pada vanilla JavaScript sebelumnya atau juga seperti menggunakan method ajax pada jQuery.

"Seuah method pada API JavaScript untuk mengambil **resources** pada jarigan, dan mengembalikan **promise** yang selesai (**fullfilled**) ketika ada **response** yang tersedia."
- Mozilla Developer Network (https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

```javascript
fetch(resources, init);
```

## resources

1. URL
   alamat dari sumber yang kita akan ambil
1. Request Object
   representasi permintaan sumber

## init (optional)

konfigurasi tambahan pada sebuah request berbentuk object `{...}`.

1. method
1. headers
1. body
1. mode
1. cache
1. referrer
1. referrerPolicy
1. integrity
1. keepalive
1. signal

## response

hasil dari fetch, berupa promise

### response (property)

1. headers
1. ok
1. redirected
1. status
1. statusText
1. type
1. url
1. body

### response (method)

1. clone()
1. error()
1. redirect()
1. blob()
1. formData()
1. json()
1. text()

rata-rata dari method di atas, mengembalikan promise
