﻿var _0xd108 = ["\x68\x74\x74\x70\x3A\x2F\x2F\x7B\x73\x7D\x2E\x74\x69\x6C\x65\x2E\x6F\x73\x6D\x2E\x6F\x72\x67\x2F\x7B\x7A\x7D\x2F\x7B\x78\x7D\x2F\x7B\x79\x7D\x2E\x70\x6E\x67", "\x68\x74\x74\x70\x3A\x2F\x2F\x7B\x73\x7D\x2E\x74\x69\x61\x6E\x64\x69\x74\x75\x2E\x63\x6E\x2F\x69\x6D\x67\x5F\x77\x2F\x77\x6D\x74\x73\x3F\x73\x65\x72\x76\x69\x63\x65\x3D\x77\x6D\x74\x73\x26\x72\x65\x71\x75\x65\x73\x74\x3D\x47\x65\x74\x54\x69\x6C\x65\x26\x76\x65\x72\x73\x69\x6F\x6E\x3D\x31\x2E\x30\x2E\x30\x26\x4C\x41\x59\x45\x52\x3D\x69\x6D\x67\x26\x74\x69\x6C\x65\x4D\x61\x74\x72\x69\x78\x53\x65\x74\x3D\x77\x26\x54\x69\x6C\x65\x4D\x61\x74\x72\x69\x78\x3D\x7B\x7A\x7D\x26\x54\x69\x6C\x65\x52\x6F\x77\x3D\x7B\x79\x7D\x26\x54\x69\x6C\x65\x43\x6F\x6C\x3D\x7B\x78\x7D\x26\x73\x74\x79\x6C\x65\x3D\x64\x65\x66\x61\x75\x6C\x74\x26\x66\x6F\x72\x6D\x61\x74\x3D\x74\x69\x6C\x65\x73", "\x68\x74\x74\x70\x3A\x2F\x2F\x7B\x73\x7D\x2E\x74\x69\x61\x6E\x64\x69\x74\x75\x2E\x63\x6E\x2F\x63\x69\x61\x5F\x77\x2F\x77\x6D\x74\x73\x3F\x73\x65\x72\x76\x69\x63\x65\x3D\x77\x6D\x74\x73\x26\x72\x65\x71\x75\x65\x73\x74\x3D\x47\x65\x74\x54\x69\x6C\x65\x26\x76\x65\x72\x73\x69\x6F\x6E\x3D\x31\x2E\x30\x2E\x30\x26\x4C\x41\x59\x45\x52\x3D\x63\x69\x61\x26\x74\x69\x6C\x65\x4D\x61\x74\x72\x69\x78\x53\x65\x74\x3D\x77\x26\x54\x69\x6C\x65\x4D\x61\x74\x72\x69\x78\x3D\x7B\x7A\x7D\x26\x54\x69\x6C\x65\x52\x6F\x77\x3D\x7B\x79\x7D\x26\x54\x69\x6C\x65\x43\x6F\x6C\x3D\x7B\x78\x7D\x26\x73\x74\x79\x6C\x65\x3D\x64\x65\x66\x61\x75\x6C\x74\x26\x66\x6F\x72\x6D\x61\x74\x3D\x74\x69\x6C\x65\x73", "\x6D\x61\x70", "\x74\x30", "\x74\x31", "\x74\x32", "\x74\x33", "\x74\x34", "\x74\x35", "\x74\x36", "\x74\x37", "\x74\x69\x6C\x65\x4C\x61\x79\x65\x72", "\x73\x65\x74\x56\x69\x65\x77", "\x53\x61\x74", "\x2E\x2F\x69\x6D\x61\x67\x65\x73\x2F\x70\x6C\x61\x6E\x65\x31\x2E\x70\x6E\x67", "\x69\x63\x6F\x6E", "\x2E\x2F\x69\x6D\x61\x67\x65\x73\x2F\x70\x6C\x61\x6E\x65\x2E\x70\x6E\x67", "\x2E\x2F\x69\x6D\x61\x67\x65\x73\x2F\x70\x6C\x61\x6E\x65\x35\x2E\x70\x6E\x67", "\x2E\x2F\x69\x6D\x61\x67\x65\x73\x2F\x73\x68\x69\x70\x2E\x70\x6E\x67", "\x61\x64\x64\x54\x6F", "\x6D\x6F\x76\x69\x6E\x67\x4D\x61\x72\x6B\x65\x72", "\x4D\x61\x72\x6B\x65\x72", "\x53\x6E\x6F\x77", "\x70\x6F\x6C\x79\x6C\x69\x6E\x65", "\x72\x65\x64", "\x44\x65\x65\x70\x50\x69\x6E\x6B", "\x59\x65\x6C\x6C\x6F\x77", "\x43\x68\x61\x72\x74\x72\x65\x75\x73\x65", "\x67\x72\x65\x65\x6E\x20"]; var osmUrl = _0xd108[0]; var tdtUrl = _0xd108[1]; var tdtUrl_L = _0xd108[2]; var osm = new L.TileLayer(osmUrl, { minZoom: 3, maxZoom: 16 }); map = L[_0xd108[3]](_0xd108[3], { center: [24.490474, 118.110221], zoom: 5, minZoom: 3, maxZoom: 18, layers: [L[_0xd108[12]](tdtUrl, { subdomains: [_0xd108[4], _0xd108[5], _0xd108[6], _0xd108[7], _0xd108[8], _0xd108[9], _0xd108[10], _0xd108[11]] }), L[_0xd108[12]](tdtUrl_L, { subdomains: [_0xd108[4], _0xd108[5], _0xd108[6], _0xd108[7], _0xd108[8], _0xd108[9], _0xd108[10], _0xd108[11]] })], zoomControl: true, attributionControl: false }); map[_0xd108[13]](new L.LatLng(23.533441, 118.597859), 6); var curMapModel = _0xd108[14]; var labLayer = 0; var planeIcon1 = L[_0xd108[16]]({ iconUrl: _0xd108[15], iconSize: [35, 35], shadowSize: [50, 64], popupAnchor: [-3, -76] }); var planeIcon2 = L[_0xd108[16]]({ iconUrl: _0xd108[17], iconSize: [35, 35], shadowSize: [50, 64], popupAnchor: [-3, -76] }); var planeIcon3 = L[_0xd108[16]]({ iconUrl: _0xd108[15], iconSize: [35, 35], shadowSize: [50, 64], popupAnchor: [-3, -76] }); var planeIcon4 = L[_0xd108[16]]({ iconUrl: _0xd108[18], iconSize: [35, 35], shadowSize: [50, 64], popupAnchor: [-3, -76] }); var planeIcon5 = L[_0xd108[16]]({ iconUrl: _0xd108[19], iconSize: [35, 35], shadowSize: [50, 64], popupAnchor: [-3, -76] }); var roil1 = [[25.153694, 117.030997], [22.720772, 120.332329]]; var roil2 = [[20.697994, 119.076189], [26.194988, 121.725399]]; var roil3 = [[27.153694, 117.030997], [24.720772, 120.332329]]; var roil4 = [[25.91247, 122.295716], [24.977001, 121.467837], [23.780563, 120.032848]]; var roil5 = [[26.145182, 122.387702], [25.428948, 119.683299], [24.152512, 117.696391]]; var roil6 = [[24.842766, 125.239283], [24.220022, 117.254856], [20.940172, 116.169416]]; var marker1 = L[_0xd108[22]][_0xd108[21]](roil1, [3000, 3000], { autostart: true, icon: planeIcon1 })[_0xd108[20]](map); L[_0xd108[24]](roil1, { color: _0xd108[23] })[_0xd108[20]](map); var marker2 = L[_0xd108[22]][_0xd108[21]](roil2, [3000, 3000], { autostart: true, icon: planeIcon2 })[_0xd108[20]](map); L[_0xd108[24]](roil2, { color: _0xd108[25] })[_0xd108[20]](map); var marker3 = L[_0xd108[22]][_0xd108[21]](roil3, [3000, 3000, 3000], { autostart: true, icon: planeIcon3 })[_0xd108[20]](map); L[_0xd108[24]](roil3, { color: _0xd108[26] })[_0xd108[20]](map); var marker4 = L[_0xd108[22]][_0xd108[21]](roil4, [3000, 3000], { autostart: true, icon: planeIcon5 })[_0xd108[20]](map); L[_0xd108[24]](roil4, { color: _0xd108[27] })[_0xd108[20]](map); var marker5 = L[_0xd108[22]][_0xd108[21]](roil5, [3000, 3000], { autostart: true, icon: planeIcon5 })[_0xd108[20]](map); L[_0xd108[24]](roil5, { color: _0xd108[28] })[_0xd108[20]](map); var marker6 = L[_0xd108[22]][_0xd108[21]](roil6, [3000, 3000, 3000, 3000], { autostart: true, icon: planeIcon5 })[_0xd108[20]](map); L[_0xd108[24]](roil6, { color: _0xd108[29] })[_0xd108[20]](map)