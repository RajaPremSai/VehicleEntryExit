<h1>To Do List</h1>
<ul>
    <li>To complete all the updated routes 
    <li>To complete all the RBAC, Validations</li>
    <li>Flow Diagram + Sequence Diagram</li>
    <li>Implement the project using Java SpringBoot Framework</li>
</ul>

<h2>All API Endpoints</h2>

<ol type="Number">
    <li>Admin
        <ul>
            <li>GET /dashboard</li>
            <li>GET /get-guards</li>
            <li>POST /add-guard</li>
            <li>DELETE /delete-guard</li>
            <li>POST /add-user</li>
            <li>DELETE /user</li>
            <li>GET /university-vehicles</li>
            <li>POST /add-university-vehicles</li>
            <li>DELETE /delete-university-vehicles</li>
            <li>GET /logs</li>
            <li>POST /add-gates</li>
            <li>DELETE /gates</li>
            <!-- <li>POST /login-admin</li> -->
            <p><i>To add some if required (PATCH, PUT)</i></p>
        </ul>
    </li>
    <li>User
        <ul>
            <li>POST /register-user</li>
            <li>POST /add-vehicle</li>
            <li>DELETE /delete-vehicle</li>
            <li>PUT /edit-vehicle</li>
            <li>GET /user-logs/:userId</li>
        </ul>
    </li>
    <li>Security Guard
        <ul>
            <li>POST /login-guard</li>
            <li>GET /gates</li>
            <li>POST /scan-barcode</li>
            <li>POST /add-visitor</li>
        </ul>
    </li>
</ol>
