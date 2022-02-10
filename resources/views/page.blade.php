@extends('layout.app')
@section('content')
    <link href="{{asset('css/stylesheet.css')}}" rel="stylesheet">
<div class="container">
    <div>
        <h1>Lorem ipsum dolor sit.</h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h3>Lorem ipsum dolor sit.</h3>
        <h4>Lorem ipsum dolor sit.</h4>
        <h5>Lorem ipsum dolor sit.</h5>
        <h6>Lorem ipsum dolor sit.</h6>
    </div>

    <div>
        <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>

        <ol>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ol>
    </div>

    <div>
        <i>Lorem ipsum dolor sit.</i><br />
        <b>Lorem ipsum dolor sit.</b><br />
        <strong>Lorem ipsum dolor sit.</strong><br />
        <em>Lorem ipsum dolor sit.</em><br />
        <mark>Lorem ipsum dolor sit.</mark><br />
        <del>Lorem ipsum dolor sit.</del><br />
        lorem<sub>Lorem ipsum dolor sit.</sub><br />
        lorem<sup>Lorem ipsum dolor sit.</sup><br />
    </div>
    <div>
        <a href="#">Lorem ipsum dolor sit.</a>
        <blockquote>
            <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Aperiam sed nulla vel rem reprehenderit numquam
                <i>Lorem ipsum dolor sit amet consectetur. </i>
                ut, tenetur laboriosam dicta commodi nesciunt dolore, quasi
                similique voluptatem reiciendis sequi ipsum ratione exercitationem
                quidem. Maiores delectus id animi impedit debitis rem, natus quos
                assumenda ex officia?
            </p>
        </blockquote>
    </div>

    <p>
        <img src="img.png" alt="" />
    <figcaption>adipisicing elit. Voluptatem, debitis!</figcaption>
    </p>

    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        corporis qui inventore, dolores expedita recusandae perspiciatis
        eligendi. Mollitia, nesciunt debitis. Impedit quaerat qui ullam dolorum
        laborum modi suscipit. Dicta numquam expedita id perferendis veniam!
        Soluta unde in, laboriosam optio, repellendus eos beatae eligendi natus
        quae ex temporibus quod aperiam ipsa, rem doloremque eveniet fugiat vero
        officia ipsam porro blanditiis debitis impedit numquam. Pariatur
        voluptate ab expedita libero fugit dolor asperiores accusantium ullam
        perspiciatis, nemo voluptatibus minima dolore beatae veritatis, eaque
        omnis itaque perferendis quis blanditiis, animi molestiae odio qu
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        corporis qui inventore, dolores expedita recusandae perspiciatis
        eligendi. Mollitia, nesciunt debitis. Impedit quaerat qui ullam dolorum
        laborum modi suscipit. Dicta numquam expedita id perferendis veniam!
        Soluta unde in, laboriosam optio, repellendus eos beatae eligendi natus
        quae ex temporibus quod aperiam ipsa, rem doloremque eveniet fugiat vero
        officia ipsam porro blanditiis debitis impedit numquam. Pariatur
        voluptatexime quae quaerat repudiandae tempora necessitatibus sint
        tempore modi, sed iste voluptas. Voluptatum repellendus eos eaque
        eligendi expedita totam non optio eius itaque nam aliquid nihil cum
        perspiciatis inventore quos, excepturi esse ab repudiandae! Beatae, eius
        non nulla quaerat saepe enim quas debitis deserunt rerum? Ratione
        distinctio doloribus sequi beatae vel iure atque nostrum temporibus
        itaque harum est nulla adipisci numquam tempora blanditiis asperiores
        fugit, quas qui molestias aspernatur ipsum dignissimos odio voluptate.
        Enim fugiat quasi quos laudantium! Nemo voluptatem enim voluptas
        voluptatibus fugiat sint quis numquam minima vitae rem pariatur quasi id
        consequuntur adipisci sed minus nostrum, magni dolorem libero fugit
        aliquam voluptatum. Reprehenderit, a exercitationem?
    </p>

    <!-- test -->
    <div>
        <p>
            <b>Lorem ipsum dolor sit amet consectetur.</b>
            <i>Lorem ipsum dolor sit amet consectetur.</i>
            <em>Lorem ipsum dolor sit amet.</em>
            <i><del>sdf</del></i>
            <em><del>Lorem ipsum dolor sit amet.</del></em>
        </p>
        <ul>
            <li>
                <em>Lorem ipsum dolor sit amet consectetur adipisicing elit.</em>
            </li>
            <li><i> Lorem ipsum dolor sit amet consectetur. </i></li>
            <li><b>Lorem ipsum dolor sit amet.</b></li>
            <li><del>Lorem ipsum dolor sit amet consectetur.</del></li>
        </ul>
        <p class="image-left">
            <img src="img.png" alt="" />
        </p>
        <p class="image-right">
            <img src="img.png" alt="" />
        </p>
        <p class="image-center">
            <img src="img.png" alt="" />
        </p>
    </div>
    <p class="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et esse
        reiciendis odit in asperiores hic nam, illum, rerum nemo velit numquam
        vel nesciunt obcaecati ipsum iste labore, facilis odio!
    </p>

    <p class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et esse
        reiciendis odit in asperiores hic nam, illum, rerum nemo velit numquam
        vel nesciunt obcaecati ipsum iste labore, facilis odio!
    </p>

    <p class="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et esse
        reiciendis odit in asperiores hic nam, illum, rerum nemo velit numquam
        vel nesciunt obcaecati ipsum iste labore, facilis odio!
    </p>
</div>
@endsection
