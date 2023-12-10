<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">builder</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;WebApplication<span style="color:#b4b4b4;">.</span>CreateBuilder(args);
 
<span style="color:#57a64a;">//&nbsp;Add&nbsp;services&nbsp;to&nbsp;the&nbsp;container.</span>
builder<span style="color:#b4b4b4;">.</span>Services<span style="color:#b4b4b4;">.</span>AddControllersWithViews();
 
<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">app</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;builder<span style="color:#b4b4b4;">.</span>Build();
 
<span style="color:#57a64a;">//&nbsp;Configure&nbsp;the&nbsp;HTTP&nbsp;request&nbsp;pipeline.</span>
<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>app<span style="color:#b4b4b4;">.</span>Environment<span style="color:#b4b4b4;">.</span>IsDevelopment())
{
&nbsp;&nbsp;&nbsp;&nbsp;app<span style="color:#b4b4b4;">.</span>UseExceptionHandler(<span style="color:#d69d85;">&quot;/Home/Error&quot;</span>);
&nbsp;&nbsp;&nbsp;&nbsp;app<span style="color:#b4b4b4;">.</span>UseHsts();
}
 
app<span style="color:#b4b4b4;">.</span>UseHttpsReasdasddirection();
app<span style="color:#b4b4b4;">.</span>UseStaticFiles();
 
app<span style="color:#b4b4b4;">.</span>UseRouting();
 
app<span style="color:#b4b4b4;">.</span>UseAuthorization();
 
app<span style="color:#b4b4b4;">.</span>MapControllerRoute(
&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;<span style="color:#d69d85;">&quot;default&quot;</span>,
&nbsp;&nbsp;&nbsp;&nbsp;pattern:&nbsp;<span style="color:#d69d85;">&quot;{controller=Home}/{action=Index}/{id?}&quot;</span>);
 
app<span style="color:#b4b4b4;">.</span>Run();
</pre>
