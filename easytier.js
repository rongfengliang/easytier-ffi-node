const ffi = require("ffi-napi");
const ref = require("ref-napi");
const Struct = require("ref-struct-di")(ref);
const path = require("path");
const platform = process.platform;
let libExt;
if (platform === "win32") {
  libExt = ".dll";
} else if (platform === "darwin") {
  libExt = ".dylib";
} else {
  libExt = ".so";
}
const libPath =
  process.env.LIBEASYTIER ||
  path.join(__dirname, "lib", `libeasytier_ffi${libExt}`);
const CString = ref.types.CString;
const Int32 = ref.types.int32;
const UintPtr = ref.types.uint64;
const CStringPtrPtr = ref.refType(CString);
const Void = ref.types.void;
const KeyValuePair = Struct({
  key: CString,
  value: CString,
});

const KeyValuePairPtr = ref.refType(KeyValuePair);

const libeasytier = ffi.Library(libPath, {
  get_error_msg: [Void, [CStringPtrPtr]],
  free_string: [Void, [CString]],
  parse_config: [Int32, [CString]],
  run_network_instance: [Int32, [CString]],
  retain_network_instance: [Int32, [ref.refType(CString), UintPtr]],
  collect_network_infos: [Int32, [KeyValuePairPtr, UintPtr]],
});

module.exports = {
  ...libeasytier,
};
