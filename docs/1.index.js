(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: createRun, createComment, createTableCell, createTableRow, createDocx, createLevel, createInsert, createTable, createNumbering, createDelete, createParagraph, TableAlignmentType, SpecialIndentKind, VMergeType, BreakType, FontPitchType, WidthType, BorderType, AlignmentType, StyleType, Comment, Delete, Docx, Insert, Level, Numbering, Paragraph, Run, Table, TableCell, TableRow, __wbindgen_string_new, __wbindgen_object_drop_ref, __wbindgen_throw, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextEncoder, TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRun\", function() { return createRun; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComment\", function() { return createComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTableCell\", function() { return createTableCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTableRow\", function() { return createTableRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDocx\", function() { return createDocx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLevel\", function() { return createLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInsert\", function() { return createInsert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTable\", function() { return createTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNumbering\", function() { return createNumbering; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDelete\", function() { return createDelete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createParagraph\", function() { return createParagraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableAlignmentType\", function() { return TableAlignmentType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialIndentKind\", function() { return SpecialIndentKind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VMergeType\", function() { return VMergeType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BreakType\", function() { return BreakType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontPitchType\", function() { return FontPitchType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WidthType\", function() { return WidthType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BorderType\", function() { return BorderType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignmentType\", function() { return AlignmentType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyleType\", function() { return StyleType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comment\", function() { return Comment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Delete\", function() { return Delete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Docx\", function() { return Docx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Insert\", function() { return Insert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Level\", function() { return Level; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Numbering\", function() { return Numbering; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paragraph\", function() { return Paragraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Run\", function() { return Run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Table\", function() { return Table; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableCell\", function() { return TableCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableRow\", function() { return TableRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\n/**\n* @returns {Run}\n*/\nfunction createRun() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createRun\"]();\n    return Run.__wrap(ret);\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    let len = arg.length;\n    let ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](len);\n\n    const mem = getUint8Memory();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read != arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {number} id\n* @returns {Comment}\n*/\nfunction createComment(id) {\n    _assertNum(id);\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createComment\"](id);\n    return Comment.__wrap(ret);\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n* @returns {TableCell}\n*/\nfunction createTableCell() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createTableCell\"]();\n    return TableCell.__wrap(ret);\n}\n\n/**\n* @returns {TableRow}\n*/\nfunction createTableRow() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createTableRow\"]();\n    return TableRow.__wrap(ret);\n}\n\n/**\n* @returns {Docx}\n*/\nfunction createDocx() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createDocx\"]();\n    return Docx.__wrap(ret);\n}\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nfunction getArrayU8FromWasm(ptr, len) {\n    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n* @param {number} id\n* @param {number} start\n* @param {string} format\n* @param {string} text\n* @param {string} jc\n* @returns {Level}\n*/\nfunction createLevel(id, start, format, text, jc) {\n    _assertNum(id);\n    _assertNum(start);\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createLevel\"](id, start, passStringToWasm(format), WASM_VECTOR_LEN, passStringToWasm(text), WASM_VECTOR_LEN, passStringToWasm(jc), WASM_VECTOR_LEN);\n    return Level.__wrap(ret);\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n/**\n* @returns {Insert}\n*/\nfunction createInsert() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createInsert\"]();\n    return Insert.__wrap(ret);\n}\n\n/**\n* @returns {Table}\n*/\nfunction createTable() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createTable\"]();\n    return Table.__wrap(ret);\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction passArray32ToWasm(arg) {\n    const ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 4);\n    getUint32Memory().set(arg, ptr / 4);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n/**\n* @param {number} id\n* @returns {Numbering}\n*/\nfunction createNumbering(id) {\n    _assertNum(id);\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createNumbering\"](id);\n    return Numbering.__wrap(ret);\n}\n\n/**\n* @returns {Delete}\n*/\nfunction createDelete() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createDelete\"]();\n    return Delete.__wrap(ret);\n}\n\n/**\n* @returns {Paragraph}\n*/\nfunction createParagraph() {\n    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"createParagraph\"]();\n    return Paragraph.__wrap(ret);\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nconst TableAlignmentType = Object.freeze({ Center:0,Left:1,Right:2, });\n/**\n*/\nconst SpecialIndentKind = Object.freeze({ FirstLine:0,Hanging:1, });\n/**\n*/\nconst VMergeType = Object.freeze({ Continue:0,Restart:1, });\n/**\n*/\nconst BreakType = Object.freeze({ Page:0,Column:1,TextWrapping:2, });\n/**\n*/\nconst FontPitchType = Object.freeze({ Default:0,Fixed:1,Variable:2, });\n/**\n*/\nconst WidthType = Object.freeze({ DXA:0,Auto:1, });\n/**\n*/\nconst BorderType = Object.freeze({ None:0,Single:1,Thick:2,Double:3,Dotted:4,Dashed:5,DotDash:6,DotDotDash:7,Triple:8, });\n/**\n*/\nconst AlignmentType = Object.freeze({ Center:0,Left:1,Right:2,Justified:3, });\n/**\n*/\nconst StyleType = Object.freeze({ Paragraph:0,Character:1, });\n/**\n*/\nclass Comment {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Comment.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_comment_free\"](ptr);\n    }\n    /**\n    * @param {string} author\n    * @returns {Comment}\n    */\n    author(author) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comment_author\"](ptr, passStringToWasm(author), WASM_VECTOR_LEN);\n        return Comment.__wrap(ret);\n    }\n    /**\n    * @param {string} date\n    * @returns {Comment}\n    */\n    date(date) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comment_date\"](ptr, passStringToWasm(date), WASM_VECTOR_LEN);\n        return Comment.__wrap(ret);\n    }\n    /**\n    * @param {Paragraph} p\n    * @returns {Comment}\n    */\n    paragraph(p) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(p, Paragraph);\n        if (p.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = p.ptr;\n        p.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comment_paragraph\"](ptr, ptr0);\n        return Comment.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    id() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comment_id\"](this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Delete {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Delete.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_delete_free\"](ptr);\n    }\n}\n/**\n*/\nclass Docx {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Docx.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_docx_free\"](ptr);\n    }\n    /**\n    * @param {Paragraph} p\n    * @returns {Docx}\n    */\n    add_paragraph(p) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(p, Paragraph);\n        if (p.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = p.ptr;\n        p.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"docx_add_paragraph\"](ptr, ptr0);\n        return Docx.__wrap(ret);\n    }\n    /**\n    * @param {Table} t\n    * @returns {Docx}\n    */\n    add_table(t) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(t, Table);\n        if (t.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = t.ptr;\n        t.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"docx_add_table\"](ptr, ptr0);\n        return Docx.__wrap(ret);\n    }\n    /**\n    * @param {Numbering} num\n    * @returns {Docx}\n    */\n    add_numbering(num) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(num, Numbering);\n        if (num.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = num.ptr;\n        num.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"docx_add_numbering\"](ptr, ptr0);\n        return Docx.__wrap(ret);\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n    build() {\n        const retptr = 8;\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(retptr);\n        _assertNum(this.ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"docx_build\"](retptr, this.ptr);\n        const memi32 = getInt32Memory();\n        const v0 = getArrayU8FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);\n        return v0;\n    }\n}\n/**\n*/\nclass Insert {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Insert.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_insert_free\"](ptr);\n    }\n}\n/**\n*/\nclass Level {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Level.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_level_free\"](ptr);\n    }\n    /**\n    * @param {number} left\n    * @param {number | undefined} special_indent_kind\n    * @param {number | undefined} special_indent_size\n    * @returns {Level}\n    */\n    indent(left, special_indent_kind, special_indent_size) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(left);\n        if (!isLikeNone(special_indent_kind)) {\n            _assertNum(special_indent_kind);\n        }\n        if (!isLikeNone(special_indent_size)) {\n            _assertNum(special_indent_size);\n        }\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"level_indent\"](ptr, left, isLikeNone(special_indent_kind) ? 2 : special_indent_kind, !isLikeNone(special_indent_size), isLikeNone(special_indent_size) ? 0 : special_indent_size);\n        return Level.__wrap(ret);\n    }\n}\n/**\n*/\nclass Numbering {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Numbering.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_numbering_free\"](ptr);\n    }\n    /**\n    * @param {Level} level\n    * @returns {Numbering}\n    */\n    add_level(level) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(level, Level);\n        if (level.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = level.ptr;\n        level.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"numbering_add_level\"](ptr, ptr0);\n        return Numbering.__wrap(ret);\n    }\n}\n/**\n*/\nclass Paragraph {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Paragraph.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_paragraph_free\"](ptr);\n    }\n    /**\n    * @param {Run} run\n    * @returns {Paragraph}\n    */\n    add_run(run) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(run, Run);\n        if (run.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = run.ptr;\n        run.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_add_run\"](ptr, ptr0);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {Insert} i\n    * @returns {Paragraph}\n    */\n    add_insert(i) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(i, Insert);\n        if (i.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = i.ptr;\n        i.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_add_insert\"](ptr, ptr0);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {Delete} d\n    * @returns {Paragraph}\n    */\n    add_delete(d) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(d, Delete);\n        if (d.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = d.ptr;\n        d.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_add_delete\"](ptr, ptr0);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {string} id\n    * @param {string} name\n    * @returns {Paragraph}\n    */\n    add_bookmark_start(id, name) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_add_bookmark_start\"](ptr, passStringToWasm(id), WASM_VECTOR_LEN, passStringToWasm(name), WASM_VECTOR_LEN);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {string} id\n    * @returns {Paragraph}\n    */\n    add_bookmark_end(id) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_add_bookmark_end\"](ptr, passStringToWasm(id), WASM_VECTOR_LEN);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {Comment} comment\n    * @returns {Paragraph}\n    */\n    add_comment_start(comment) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(comment, Comment);\n        if (comment.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = comment.ptr;\n        comment.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_add_comment_start\"](ptr, ptr0);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {number} id\n    * @returns {Paragraph}\n    */\n    add_comment_end(id) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(id);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_add_comment_end\"](ptr, id);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {number} alignment_type\n    * @returns {Paragraph}\n    */\n    align(alignment_type) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(alignment_type);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_align\"](ptr, alignment_type);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {string} style_id\n    * @returns {Paragraph}\n    */\n    style(style_id) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_style\"](ptr, passStringToWasm(style_id), WASM_VECTOR_LEN);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {number} left\n    * @param {number | undefined} special_indent_kind\n    * @param {number | undefined} special_indent_size\n    * @returns {Paragraph}\n    */\n    indent(left, special_indent_kind, special_indent_size) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(left);\n        if (!isLikeNone(special_indent_kind)) {\n            _assertNum(special_indent_kind);\n        }\n        if (!isLikeNone(special_indent_size)) {\n            _assertNum(special_indent_size);\n        }\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_indent\"](ptr, left, isLikeNone(special_indent_kind) ? 2 : special_indent_kind, !isLikeNone(special_indent_size), isLikeNone(special_indent_size) ? 0 : special_indent_size);\n        return Paragraph.__wrap(ret);\n    }\n    /**\n    * @param {number} id\n    * @param {number} level\n    * @returns {Paragraph}\n    */\n    numbering(id, level) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(id);\n        _assertNum(level);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"paragraph_numbering\"](ptr, id, level);\n        return Paragraph.__wrap(ret);\n    }\n}\n/**\n*/\nclass Run {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Run.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_run_free\"](ptr);\n    }\n    /**\n    * @param {string} text\n    * @returns {Run}\n    */\n    add_text(text) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_add_text\"](ptr, passStringToWasm(text), WASM_VECTOR_LEN);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @param {string} text\n    * @returns {Run}\n    */\n    add_delete_text(text) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_add_delete_text\"](ptr, passStringToWasm(text), WASM_VECTOR_LEN);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @returns {Run}\n    */\n    add_tab() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_add_tab\"](ptr);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @param {number} break_type\n    * @returns {Run}\n    */\n    add_break(break_type) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(break_type);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_add_break\"](ptr, break_type);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @param {number} size\n    * @returns {Run}\n    */\n    size(size) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(size);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_size\"](ptr, size);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @param {string} color\n    * @returns {Run}\n    */\n    color(color) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_color\"](ptr, passStringToWasm(color), WASM_VECTOR_LEN);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @param {string} color\n    * @returns {Run}\n    */\n    highlight(color) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_highlight\"](ptr, passStringToWasm(color), WASM_VECTOR_LEN);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @returns {Run}\n    */\n    bold() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_bold\"](ptr);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @returns {Run}\n    */\n    italic() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_italic\"](ptr);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @param {string} line_type\n    * @returns {Run}\n    */\n    underline(line_type) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_underline\"](ptr, passStringToWasm(line_type), WASM_VECTOR_LEN);\n        return Run.__wrap(ret);\n    }\n    /**\n    * @returns {Run}\n    */\n    vanish() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run_vanish\"](ptr);\n        return Run.__wrap(ret);\n    }\n}\n/**\n*/\nclass Table {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Table.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_table_free\"](ptr);\n    }\n    /**\n    * @param {TableRow} row\n    * @returns {Table}\n    */\n    add_row(row) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(row, TableRow);\n        if (row.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = row.ptr;\n        row.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"table_add_row\"](ptr, ptr0);\n        return Table.__wrap(ret);\n    }\n    /**\n    * @param {Uint32Array} grid\n    * @returns {Table}\n    */\n    set_grid(grid) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"table_set_grid\"](ptr, passArray32ToWasm(grid), WASM_VECTOR_LEN);\n        return Table.__wrap(ret);\n    }\n    /**\n    * @param {number} v\n    * @returns {Table}\n    */\n    indent(v) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(v);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"table_indent\"](ptr, v);\n        return Table.__wrap(ret);\n    }\n    /**\n    * @param {number} v\n    * @returns {Table}\n    */\n    align(v) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(v);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"table_align\"](ptr, v);\n        return Table.__wrap(ret);\n    }\n}\n/**\n*/\nclass TableCell {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(TableCell.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_tablecell_free\"](ptr);\n    }\n    /**\n    * @param {Paragraph} p\n    * @returns {TableCell}\n    */\n    add_paragraph(p) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(p, Paragraph);\n        if (p.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = p.ptr;\n        p.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tablecell_add_paragraph\"](ptr, ptr0);\n        return TableCell.__wrap(ret);\n    }\n    /**\n    * @param {number} t\n    * @returns {TableCell}\n    */\n    vertical_merge(t) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(t);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tablecell_vertical_merge\"](ptr, t);\n        return TableCell.__wrap(ret);\n    }\n    /**\n    * @param {number} v\n    * @returns {TableCell}\n    */\n    grid_span(v) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertNum(v);\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tablecell_grid_span\"](ptr, v);\n        return TableCell.__wrap(ret);\n    }\n}\n/**\n*/\nclass TableRow {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(TableRow.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_tablerow_free\"](ptr);\n    }\n    /**\n    * @param {TableCell} cell\n    * @returns {TableRow}\n    */\n    add_cell(cell) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        const ptr = this.ptr;\n        this.ptr = 0;\n        _assertNum(ptr);\n        _assertClass(cell, TableCell);\n        if (cell.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        const ptr0 = cell.ptr;\n        cell.ptr = 0;\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tablerow_add_cell\"](ptr, ptr0);\n        return TableRow.__wrap(ret);\n    }\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    const ret = getStringFromWasm(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, __wbg_run_free, createRun, run_add_text, run_add_delete_text, run_add_tab, run_add_break, run_size, run_color, run_highlight, run_bold, run_italic, run_underline, run_vanish, __wbg_comment_free, createComment, comment_author, comment_date, comment_paragraph, comment_id, __wbg_tablecell_free, createTableCell, tablecell_add_paragraph, tablecell_vertical_merge, tablecell_grid_span, __wbg_tablerow_free, createTableRow, tablerow_add_cell, __wbg_docx_free, createDocx, docx_add_paragraph, docx_add_table, docx_add_numbering, docx_build, __wbg_level_free, createLevel, level_indent, __wbg_insert_free, createInsert, __wbg_table_free, createTable, table_add_row, table_set_grid, table_indent, table_align, __wbg_numbering_free, createNumbering, numbering_add_level, __wbg_delete_free, createDelete, __wbg_paragraph_free, createParagraph, paragraph_add_run, paragraph_add_insert, paragraph_add_delete, paragraph_add_bookmark_start, paragraph_add_bookmark_end, paragraph_add_comment_start, paragraph_add_comment_end, paragraph_align, paragraph_style, paragraph_indent, paragraph_numbering, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);