import{_ as t,c as o,a2 as n,o as a}from"./chunks/framework.YPpNXepj.js";const g=JSON.parse('{"title":"Creating a Content Release","description":"","frontmatter":{},"headers":[],"relativePath":"content/release/create.md","filePath":"content/release/create.md"}'),r={name:"content/release/create.md"};function s(i,e,l,c,d,h){return a(),o("div",null,e[0]||(e[0]=[n('<h1 id="creating-a-content-release" tabindex="-1">Creating a Content Release <a class="header-anchor" href="#creating-a-content-release" aria-label="Permalink to &quot;Creating a Content Release&quot;">​</a></h1><h2 id="essential-information" tabindex="-1">Essential Information <a class="header-anchor" href="#essential-information" aria-label="Permalink to &quot;Essential Information&quot;">​</a></h2><p>A Content Release is essentially a <strong>ZIP file</strong> containing all the <strong>necessary files</strong> for your <strong>Minecraft instance</strong>. This typically includes folders like <code>mods</code>, <code>config</code>, <code>resourcepacks</code>, etc. It should contain the <strong>minimum files</strong> required for your instance to <strong>function correctly</strong>.</p><p>Whenever you want to update your release, upload a new <strong>ZIP file</strong>. This new ZIP is identical to the previous one but with the modifications. Every Content Release should include all necessary files, even if they haven&#39;t been changed. Later, in the <strong>Content JSON</strong>, you&#39;ll specify <strong>which files need to be modified</strong> or not, as well as the <strong>version of that Content instance</strong>.</p><h2 id="how-to-create-a-content-release" tabindex="-1">How to Create a Content Release <a class="header-anchor" href="#how-to-create-a-content-release" aria-label="Permalink to &quot;How to Create a Content Release&quot;">​</a></h2><p>To create a Content Release, you can use <strong>any launcher</strong>. I recommend using <a href="https://multimc.org/" target="_blank" rel="noreferrer">MultiMC</a>. Once you have all the necessary files for your instance, <strong>compress them into a ZIP file</strong>.</p><h2 id="compatible-mod-loaders-and-additional-information" tabindex="-1">Compatible Mod Loaders and Additional Information <a class="header-anchor" href="#compatible-mod-loaders-and-additional-information" aria-label="Permalink to &quot;Compatible Mod Loaders and Additional Information&quot;">​</a></h2><p>ONE Launcher is compatible with <strong>all popular mod loaders</strong>, including:</p><ul><li><strong>Fabric</strong></li><li><strong>Forge</strong></li><li><strong>Quilt</strong></li><li><strong>NeoForge</strong></li></ul><p>Under no circumstances should you include the Minecraft <code>versions</code> folder. The mod loader is specified in the <strong>Content JSON</strong> and the <strong>launcher</strong> will be responsible for <strong>installing</strong> the corresponding <strong>mod loader</strong>, so there&#39;s no need to include it in the ZIP.</p><h2 id="files-to-exclude" tabindex="-1">Files to Exclude <a class="header-anchor" href="#files-to-exclude" aria-label="Permalink to &quot;Files to Exclude&quot;">​</a></h2><p>In the Content Release ZIP file, you should not include the following:</p><ul><li>Any <strong>user-related information</strong> like <code>usercache.json</code>.</li><li>Any <strong>launcher-related files</strong> like <code>launcher_profiles.json</code>, <code>realms_persistence.json</code>.</li><li>Any of the <strong>following folders</strong>: <code>assets</code>, <code>cache</code>, <code>libraries</code>, <code>logs</code>, <code>versions</code>.</li></ul><p>Basically, only <strong>include the minimum files required for the instance to function</strong>. Nothing more.</p><h2 id="content-release-example" tabindex="-1">Content Release Example <a class="header-anchor" href="#content-release-example" aria-label="Permalink to &quot;Content Release Example&quot;">​</a></h2><p>If you&#39;d like to see an example of a Content Release, please refer to this <a href="./../create-content.html#content-instance-example">specific point</a>.</p><h2 id="publishing-a-content-release" tabindex="-1">Publishing a Content Release <a class="header-anchor" href="#publishing-a-content-release" aria-label="Permalink to &quot;Publishing a Content Release&quot;">​</a></h2><p>For more information on <strong>how to publish your Content Release</strong>, continue to the <a href="/content/release/publish.html">next page</a>.</p>',18)]))}const f=t(r,[["render",s]]);export{g as __pageData,f as default};
