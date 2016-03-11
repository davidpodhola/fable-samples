#load "node_modules/fable-core/Fable.Core.fs"
open Fable.Core

[<Erase>]
module Lib =
    let [<Global>] Vue: obj = failwith "JS only"

module Main =
  createNew Lib.Vue (
    createObj [
                "el" ==> "#app"
                "data" ==>
                    createObj [
                        "message" ==> "Hello from F#!"
                    ]
               ]
     )
