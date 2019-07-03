<div class="layer">
  <!--<img src="../../assets/bg.png" />-->
  <img src="${ require('../../assets/bg.png') }" />
  <div> this is A <%= name %> layer</div>
  <% for (var i = 0; i < arr.length; i++) {%>
      <%= arr[i] %>
  <% } %>
</div>