(()=>{
  const terms=[
    ['pixel mapping','pixel-mapping','Matching virtual image pixels to the positions and channel addresses of physical LED pixels.'],
    ['media server','media-server','A computer system that plays, processes, and routes visual content for a show or installation.'],
    ['show controller','show-controller','A device that stores and plays lighting cues, timelines, schedules, or triggered actions.'],
    ['voxel mapping','voxel-mapping','Mapping content into a true three-dimensional grid of controllable light points.'],
    ['timecode','timecode','A shared timing reference used to synchronize lighting, video, audio, and other show systems.'],
    ['eDMX','edmx','A general label for carrying DMX-style universe data over an Ethernet/IP network.'],
    ['OSC','osc','Open Sound Control, a network messaging protocol often used for show-control integration.'],
    ['RDM','rdm','Remote Device Management, a bidirectional extension to DMX for discovery, configuration, and status.'],
    ['differential signaling','differential-signaling','Data sent as the voltage difference between two wires, improving noise rejection over long cables.'],
    ['power injection','power-injection','Adding power at extra points along LED tape to reduce voltage drop.'],
    ['voltage drop','voltage-drop','Voltage lost in wires and copper traces because current flows through resistance.'],
    ['individually addressable','addressable','Pixels that can each receive their own color or brightness values.'],
    ['pixel grouping','pixel-grouping','Making several physical pixels respond as one logical pixel to reduce control-channel use.'],
    ['common ground','common-ground','A shared electrical reference between the controller and LED tape.'],
    ['daisy-chain','daisy-chain','Connecting devices in sequence, with the signal passing from one to the next.'],
    ['Art-Net','art-net','A protocol that carries DMX-style lighting data over Ethernet using IP networks.'],
    ['DMX512-D','dmx512-d','Advatek’s differential pixel protocol; it is distinct from conventional fixture-level DMX512.'],
    ['DMX512','dmx512','The entertainment-lighting control standard commonly carried over an RS-485 differential link.'],
    ['DMX','dmx512','The entertainment-lighting control standard commonly carried over an RS-485 differential link.'],
    ['sACN','sacn','Streaming ACN: a standard for sending many universes of lighting data over an IP network.'],
    ['RS-485','rs-485','A robust differential electrical signaling standard commonly used by DMX512.'],
    ['RGB+CCT','rgbcct','LED tape with red, green, blue, warm-white, and cool-white channels.'],
    ['RGBCCT','rgbcct','LED tape with red, green, blue, warm-white, and cool-white channels.'],
    ['RGBW','rgbw','LED tape with red, green, blue, and a separate white channel.'],
    ['SPI','spi','Here, a family of chip-level digital pixel signals sent directly from a pixel controller to addressable LEDs.'],
    ['PWM','pwm','Pulse-width modulation: rapid switching used to control LED brightness.'],
    ['TTL','ttl','Short-distance, ground-referenced digital signaling commonly used for direct pixel data.'],
    ['pixel controller','pixel-controller','Hardware that receives lighting data and generates the exact digital protocol required by pixel tape.'],
    ['universe','universe','A block of up to 512 control slots in DMX, Art-Net, or sACN.'],
    ['channel','channel','One control value—often one color component such as red, green, blue, or white.'],
    ['pixel','pixel','The smallest independently controlled LED section; it may contain one LED or a group of LEDs.'],
    ['decoder','decoder','Hardware that translates lighting-control data into outputs suitable for LED tape.'],
    ['termination','termination','A resistor placed at the end of a differential data line to reduce signal reflections.'],
    ['topology','topology','The physical arrangement of devices and cables, such as daisy-chain, star, or branches.'],
    ['IC','ic','Integrated circuit: the small chip that receives data and controls an LED or pixel group.'],
    ['AWG','awg','American Wire Gauge, a wire-size system where smaller numbers generally mean thicker wire.'],
    ['headroom','headroom','Extra capacity kept above the calculated load so equipment is not operated at its limit.']
  ];
  const roots=document.querySelectorAll('main,.content,.hero,.quick,.guide-section');
  if(!roots.length||location.pathname.endsWith('/glossary.html'))return;
  const used=new Set();
  const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
    const p=node.parentElement;
    if(!p||!node.nodeValue.trim()||p.closest('a,script,style,code,pre,h1,h2,h3,.sitebar,.footer,.sources'))return NodeFilter.FILTER_REJECT;
    if(![...roots].some(r=>r.contains(p)))return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }});
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){
    let remaining=node.nodeValue,changed=false;
    const fragment=document.createDocumentFragment();
    while(remaining){
      let hit=null;
      for(const [label,id,definition] of terms){
        if(used.has(id))continue;
        const m=new RegExp(`\\b${esc(label)}\\b`,'i').exec(remaining);
        if(m&&(!hit||m.index<hit.match.index))hit={id,definition,match:m};
      }
      if(!hit){fragment.append(document.createTextNode(remaining));break;}
      fragment.append(document.createTextNode(remaining.slice(0,hit.match.index)));
      const link=document.createElement('a');link.className='jargon-term';link.href=`/glossary.html#${hit.id}`;link.dataset.definition=hit.definition;link.textContent=hit.match[0];link.setAttribute('aria-label',`${hit.match[0]}: ${hit.definition} Open glossary entry.`);
      fragment.append(link);used.add(hit.id);changed=true;
      remaining=remaining.slice(hit.match.index+hit.match[0].length);
    }
    if(changed)node.replaceWith(fragment);
  }
})();
