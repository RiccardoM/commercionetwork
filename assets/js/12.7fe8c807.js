(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{214:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"installing-a-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-full-node"}},[s._v("#")]),s._v(" Installing a full node")]),s._v(" "),a("p",[s._v("After you've setup your hardware following the "),a("router-link",{attrs:{to:"/nodes/hardware-requirements.html"}},[s._v("hardware requirements")]),s._v(" you are now ready to\nbecome a Commercio.network full node.")],1),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Make sure you have read the "),a("router-link",{attrs:{to:"/nodes/hardware-requirements.html"}},[s._v("hardware requirements")]),s._v(" before starting")],1)]),s._v(" "),a("h2",{attrs:{id:"_1-installing-the-software-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-installing-the-software-requirements"}},[s._v("#")]),s._v(" 1. Installing the software requirements")]),s._v(" "),a("p",[s._v("In order to update the OS so that you can work properly, execute the following commands:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gcc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\nsnap "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --classic go\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODENAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<your-moniker>"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export GOPATH=\""),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\""),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\""),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/snap/bin\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export NODENAME='),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODENAME")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"_2-chain-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-chain-selection"}},[s._v("#")]),s._v(" 2. Chain selection")]),s._v(" "),a("p",[s._v("Before installing the node, please select which chain you would like to connect to")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf commercio-chains\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" commercio-chains "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" commercio-chains\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/commercionetwork/chains.git "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" commercio-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("chain-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Always remember to pick the latest chain version listed inside "),a("a",{attrs:{href:"https://github.com/commercionetwork/chains",target:"_blank",rel:"noopener noreferrer"}},[s._v("chains repo"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"_3-install-binaries-genesis-file-and-setup-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-binaries-genesis-file-and-setup-configuration"}},[s._v("#")]),s._v(" 3. Install binaries, genesis file and setup configuration")]),s._v(" "),a("p",[s._v("Compile binaries")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pkill")]),s._v(" cnd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pkill")]),s._v(" cncli\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/commercionetwork/commercionetwork.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout tags/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Release\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\ngo mod verify\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Test if you have the correct binaries version:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("cnd version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Should output the same version written inside the .data file.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat .data | grep -oP 'Release\\s+\\K\\S+'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Setup the validator node name. We will use the same name for node as well as the wallet key:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CHAINID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("commercio-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Name\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CHAINID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CHAINID")]),s._v('"')]),s._v("\nEOF\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("Init the "),a("code",[s._v(".cnd")]),s._v(" folder with the basic configuration")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("cnd unsafe-reset-all\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you get a error because .cnd folder is not present don't worry ")]),s._v("\n\ncnd init "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODENAME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you get a error because .cnd folder is present don't worry ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Install "),a("code",[s._v("genesis.json")]),s._v(" file")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pkill")]),s._v(" cnd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.cnd/config/genesis.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" genesis.json ~/.cnd/config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Change the persistent peers inside "),a("code",[s._v("config.toml")]),s._v(" file")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|persistent_peers = '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("|persistent_peers = "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Persistent peers\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('|g"')]),s._v(" ~/.cnd/config/config.toml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.cnd/config/config.toml.tmp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/.cnd/config/config.toml.tmp  ~/.cnd/config/config.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Change the seeds inside the "),a("code",[s._v("config.toml")]),s._v(" file")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|seeds = '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("|seeds = "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Seeds\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('|g"')]),s._v(" ~/.cnd/config/config.toml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.cnd/config/config.toml.tmp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/.cnd/config/config.toml.tmp  ~/.cnd/config/config.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-configure-the-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-configure-the-service"}},[s._v("#")]),s._v(" 4. Configure the service")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/systemd/system/cnd.service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF  \n[Unit]\nDescription=Commercio Node\nAfter=network-online.target\n\n[Service]\nUser=root\nExecStart=/root/go/bin/cnd start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("strong",[s._v("Optional")]),s._v(". You can quick sync with the follow procedure:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://quicksync.commercio.network/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CHAINID")]),s._v('.latest.tgz"')]),s._v(" -P ~/.cnd/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check if the checksum matches the one present inside https://quicksync.commercio.network")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.cnd/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $CHAINID"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".latest.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("Now you can start you full node. Enable the newly created server and try starting it using:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start the node  ")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" cnd  \nsystemctl start cnd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Control if the sync was started. Use "),a("code",[s._v("Ctrl + C")]),s._v(" to interrupt the "),a("code",[s._v("tail")]),s._v(" command")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -100f /var/log/syslog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OUTPUT SHOULD BE LIKE BELOW")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.722] Executed block                               module=state height=1 validTxs=0 invalidTxs=0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.728] Committed state                              module=state height=1 txs=0 appHash=9815044185EB222CE9084AA467A156DFE6B4A0B1BAAC6751DE86BB31C83C4B08")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.745] Executed block                               module=state height=2 validTxs=0 invalidTxs=0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.751] Committed state                              module=state height=2 txs=0 appHash=96BFD9C8714A79193A7913E5F091470691B195E1E6F028BC46D6B1423F7508A5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.771] Executed block                               module=state height=3 validTxs=0 invalidTxs=0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_6-start-the-rest-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-start-the-rest-api"}},[s._v("#")]),s._v(" 6. Start the REST API")]),s._v(" "),a("p",[s._v("Each full node can start up its own REST API service.\nThis will allow it to expose some endpoints that can be used in order to query the chain state at any moment.")]),s._v(" "),a("p",[s._v("If you want to start such a service, you need to run the following command")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cncli config chain-id $CHAINID\ncncli rest-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("This will start up the REST server and make it reachable using the port "),a("code",[s._v("1317")]),s._v(".\nFrom here, if you want you can use services such as "),a("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx"),a("OutboundLink")],1),s._v(" in order to make it available to other devices.")]),s._v(" "),a("h2",{attrs:{id:"next-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-step"}},[s._v("#")]),s._v(" Next step")]),s._v(" "),a("p",[s._v("Now that you are a Commercio.network full node, if you want you can become a validator.\nIf you wish to do so, please read the "),a("router-link",{attrs:{to:"/nodes/validator-node-installation.html"}},[a("em",[s._v("Becoming a validator")]),s._v(" guide")]),s._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);